import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
function Button({
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    large = false,
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button'

    const props = {
        onClick,
        ...passProps,
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    // Remove event listener when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        large,
        disabled,
    })
    return (
        <Comp {...props} className={classes}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
