import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'

import config from '~/config'
import Menu, { MenuItem } from './Menu'
import {
    ExploreActiveIcon,
    ExploreIcon,
    GroupUserActiveIcon,
    GroupUserIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/components/Icons'
import SuggestedItems from '~/components/SuggestedItems'

const cx = classNames.bind(styles)

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="Dành cho bạn"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Đang Follow"
                    to={config.routes.following}
                    icon={<GroupUserIcon />}
                    activeIcon={<GroupUserActiveIcon />}
                />
                {/* <MenuItem
                    title="Khám phá"
                    to={config.routes.explore}
                    icon={<ExploreIcon />}
                    activeIcon={<ExploreActiveIcon />}
                /> */}
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestedItems
                label="Tài khoản được đề xuất"
                more="Xem tất cả"
                amount="3"
            />
            {/* <SuggestedItems
                label="Các tài khoản đang follow"
                more="Xem thêm"
                amount="2"
            /> */}
        </aside>
    )
}

export default Sidebar
