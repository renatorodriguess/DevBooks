'use client'

import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import BestBooks from './components/BestBooks/Bestbooks'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import AllBooks from './components/AllBooks/AllBooks'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer';
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    Aos.refresh()
  }, [])
  return (
    <>
      <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <Navbar />
        <Hero />
        <BestBooks />
        <Banner />
        <AppStore />
        <AllBooks />
        <Testimonial />
        <Footer />
      </div>
    </>
  )
}
