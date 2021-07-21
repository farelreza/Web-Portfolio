import Link from 'next/link'

export default function Navlink({ children, href }) {
  return (
    <Link href={href}>
      <a className='hover:bg-blue-300 px-4 py-2 rounded-lg hover:text-white font-bold'>
        {children}
      </a>
    </Link>
  )
}
