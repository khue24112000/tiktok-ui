import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import AccountItem from './AccountItem'

import styles from './SuggestedItems.module.scss'

const cx = classNames.bind(styles)

function SuggestedItems({ label, more }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>{label}</h2>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>{more}</p>
        </div>
    )
}

SuggestedItems.propTypes = {
    label: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
}

export default SuggestedItems
