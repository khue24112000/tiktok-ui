import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './SuggestedItems.module.scss'
import Image from '../Image'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div>
            <Tippy
                interactive="true"
                // visible="true"
                placement="bottom"
                offset={[-20, 10]}
                delay={[300, 300]}
                render={(props) => (
                    <div tabIndex="-1" {...props}>
                        <PopperWrapper className={cx('sidebar-popper')}>
                            <AccountPreview />
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('account-item')}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/db40c9628883faacb48ddbf71b15c4c8~c5_100x100.jpeg?x-expires=1680656400&x-signature=wP30TH66IFvTuhq4TVNn2w%2BWZcw%3D"
                        alt=""
                    />
                    <div className={cx('info')}>
                        <div className={cx('nickname')}>
                            <h4 className={cx('title')}>LinhPaii</h4>
                            <FontAwesomeIcon
                                className="check"
                                icon={faCheckCircle}
                            />
                        </div>
                        <p className={cx('name')}>Linh Paii sieu cap vip pro</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

export default AccountItem
