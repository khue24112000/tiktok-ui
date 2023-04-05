import PropTypes from 'prop-types'
import { forwardRef, useState } from 'react'
import images from '~/assets/images'
import classNames from 'classnames'
import styles from './Image.module.scss'

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFallback] = useState('')
        const handleError = () => {
            setFallback(customFallback)
        }
        // eslint-disable-next-line jsx-a11y/alt-text
        return (
            <img
                className={classNames(styles.wrapper, className)}
                src={fallback || src}
                alt={alt}
                ref={ref}
                {...props}
                onError={handleError}
            />
        )
    },
)

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image
