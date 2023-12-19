import Image from 'next/image'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import BestBooks from './components/BestBooks/Bestbooks'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'

export default function Home() {
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
        <AppStore />
      </div>
    </>
  )
}
