import Layout from '../components/Layout'
import Container from '../components/Container'
import SocialMedia from '../components/SocialMedia'
import Image from 'next/image'

export default function Home() {
  return (
  <Layout>
    <Container>
      <div className='py-36 w-full flex flex-row'>
        <div className='w-1/2'>
          <p className="text-2xl xl:text-4xl">Halo, Saya</p>
          <p className="text-blue-800 text-2xl xl:text-4xl font-bold">Sultan Farel Syah Reza</p>
          <p className="text-sm xl:text-lg font-light text-gray mt-2 xl:mt-4">Saat ini saya merupakan mahasiswa Informatika di Universitas Pembangunan Nasional Veteran Jakarta. Saya sedang mempelajari <i>UI/UX Design</i>,<i> Web Development</i>, dan <i>Frontend Development.</i></p>
          <div className='mt-10'>
            <SocialMedia/>
          </div>
        </div>
        <div>
          <Image src="/images/farel.png" width={500} height={500}/>
        </div>    
      </div>
      
      
    </Container>
  </Layout>
  )
}
