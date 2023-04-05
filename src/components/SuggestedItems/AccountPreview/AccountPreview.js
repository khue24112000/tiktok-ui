import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import Button from '~/components/Button'

import Image from '~/components/Image'
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/db40c9628883faacb48ddbf71b15c4c8~c5_100x100.jpeg?x-expires=1680656400&x-signature=wP30TH66IFvTuhq4TVNn2w%2BWZcw%3D"
                    alt="avatar"
                    className={cx('avatar')}
                />

                <Button primary className={cx('btn')}>
                    Follow
                </Button>
            </div>
            <div className={cx('info')}>
                <div className={cx('nickname')}>
                    <strong>LinhPaii</strong>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </div>
                <p className={cx('name')}>Lương Yến Linh</p>
            </div>
            <div className={cx('subcribe')}>
                <span>
                    <strong>8.3M</strong>Follower
                </span>
                <span>
                    <strong>519.7M</strong>Thích
                </span>
            </div>
        </div>
    )
}

export default AccountPreview
