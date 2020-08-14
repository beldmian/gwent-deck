import Link from 'next/link'

export default function ButtonLink({ className, href, hrefAs, children }) {
  return (
    <Link href={href} as={hrefAs}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}