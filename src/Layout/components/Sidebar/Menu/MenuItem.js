import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink to={to}>
            {({ isActive }) => (
                <div className={cx('menu-item', { active: isActive })}>
                    {isActive ? activeIcon : icon}
                    <span className={cx('menu-title')}>{title}</span>
                </div>
            )}
        </NavLink>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}

export default MenuItem
