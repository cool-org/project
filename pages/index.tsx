import Link from 'next/link'

export default () =>
  <div style={{ color: 'purple', fontSize: 42 }}>
    Hello from Gitpod.{' '}
    <Link href="/about">
      <a>More Info</a>
    </Link>
  </div>
