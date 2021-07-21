import Navlink from "../Navlink"

export default function Navbar() {
  return (
    <nav className='w-screen bg-blue-50 p-4 sticky top-0'>
      <div className='flex justify-center gap-x-8'>
        <Navlink href='/'>
          Home
        </Navlink>
        <Navlink href='https://drive.google.com/file/d/1j-rDxbJj0ixBm0JLYcNYqF0KXVsILwNo/view?usp=sharing'>
          CV
        </Navlink>
        <Navlink href='/portfolio'>
          Portfolio
        </Navlink>
      </div>
    </nav>
  )
}
