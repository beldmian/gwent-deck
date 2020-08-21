import Link from 'next/link'
import PropTypes from 'prop-types'

function ButtonLink({ className, href, children }) {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.element,
}

export default ButtonLink