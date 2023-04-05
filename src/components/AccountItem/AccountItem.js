import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import Image from '../Image'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.avatar}
            ></Image>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data['full_name']}</span>
                    <FontAwesomeIcon className="check" icon={faCheckCircle} />
                </h4>
                <p className={cx('nickname')}>{data.nickname}</p>
            </div>
        </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem
