import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { useEffect, useState, useRef } from 'react'

import AccountItem from '~/components/AccountItem'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import { ClearIcon, LoadingIcon, SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'
import * as searchServices from '~/services/searchService'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(false)

    const inputRef = useRef()

    const [isFocus, setIsFocus] = useState(true)

    const debouncedValue = useDebounce(searchValue, 500)

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([])
            return
        }

        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)
            const result = await searchServices.search(debouncedValue)
            setSearchResult(result)
            setLoading(false)
        }
        fetchApi()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setIsFocus(false)
    }

    return (
        // Tippy warning
        <div>
            <Tippy
                interactive="true"
                visible={searchResult.length > 0 && isFocus && searchValue}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <p className={cx('search-label')}>Tài khoản</p>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck={false}
                        aria-autocomplete="none"
                        onChange={(e) =>
                            setSearchValue(e.target.value.trimStart())
                        }
                        onFocus={() => setIsFocus(true)}
                    />
                    {searchValue && !loading && (
                        <button onClick={handleClear} className={cx('close')}>
                            <ClearIcon />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading')}>
                            <LoadingIcon />
                        </button>
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    )
}

export default Search
