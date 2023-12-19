import Image from 'next/image'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}
