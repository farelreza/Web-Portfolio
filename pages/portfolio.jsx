import Layout from '../components/Layout'
import Container from '../components/Container'
import Title from '../components/Title'
import Card from '../components/Card'
import Link from 'next/link'

export default function Portfolio({shots}) {
  return (
    <Layout>
      <Container className='mt-6'>
        <Title >Design Portfolio</Title>
        <div className="w-full grid grid-cols-2 gap-7 mt-4">
          {shots.map((shot, i)=>(
            <Card title={shot.title} url={shot.html_url} image_url={shot.images.hidpi}/>
          ))}
        </div>
        <div className="flex flex-col items-center mt-4">
        <Link href="https://dribbble.com/FarelReza">
          <a className="py-2 px-4 bg-blue-800 text-white rounded-lg">See more in Dribbble</a>
        </Link>
        </div>
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  var requestOptions = {
    method: 'GET',
  };
  const response = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${process.env.DRIBBLE_KEY}&page=1&per_page=9`, requestOptions)
  const shots = await response.json()

  return {
    props: {shots}, 
  }
}