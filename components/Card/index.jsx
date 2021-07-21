import Image from 'next/image'
import Link from 'next/link'

export default function Card({title, url, image_url}) {
  return (
    <Link href= {url}>
      <a>
        <div className="h-80 w-full relative rounded-lg overflow-hidden">
          <Image alt="card" src={image_url} layout="fill"/>
        </div>
        <p>{title}</p>
      </a>
    </Link>
  )
}

