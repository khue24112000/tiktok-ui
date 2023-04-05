import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import Menu from '~/components/Popper/Menu'
import Image from '~/components/Image'
import {
    BarIcon,
    FeedbackIcon,
    GetCoinIcon,
    KeyboardIcon,
    LanguageIcon,
    LogoutIcon,
    MailboxIcon,
    MessageIcon,
    PlusIcon,
    ProfileIcon,
    SettingIcon,
} from '~/components/Icons'
import Search from '~/Layout/components/Search'
import config from '~/config'

const cx = classNames.bind(styles)

const MENU_ITEM = [
    {
        icon: <LanguageIcon />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Phím tắt trên bàn phím',
    },
]

const USER_MENU = [
    {
        icon: <ProfileIcon />,
        title: 'Xem hồ sơ',
        to: '/profile',
    },
    {
        icon: <GetCoinIcon />,
        title: 'Nhận xu',
        to: '/coin',
    },
    {
        icon: <SettingIcon />,
        title: 'Cài đặt',
        to: '/setting',
    },
    ...MENU_ITEM,
    {
        icon: <LogoutIcon />,
        title: 'Đăng xuất',
        to: '/logout',
        separate: true,
    },
]

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const currentUser = true
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <Link to={config.routes.home}>
                    <div className={cx('logo')}>
                        <img src={images.logo} alt="Tiktok logo" />
                    </div>
                </Link>
                <Search />
                <div className={cx('action')}>
                    <Button outline leftIcon={<PlusIcon />}>
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy
                                className="action-wrapper"
                                placement="bottom"
                                content="Nhắn tin"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon
                                        className={cx('action-icon')}
                                    />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                            <Tippy className="action-wrapper" content="Hộp thư">
                                <button className={cx('action-btn')}>
                                    <MailboxIcon
                                        className={cx('action-icon')}
                                    />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Đăng nhập</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? USER_MENU : MENU_ITEM}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('current-avatar')}
                                src="https://images.unsplash.com/photo-1679641049908-1c1bc90d2609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="Nguyen Van A"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <BarIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    )
}

export default Header
