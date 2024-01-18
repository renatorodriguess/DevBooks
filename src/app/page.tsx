'use client'
import React, {useState} from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import Books from './components/Books/Books'
import Banner from './components/Banner/Banner'
import AppStore from './components/AppStore/AppStore'
import AllBooks from './components/AllBooks/AllBooks'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Home() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = (isOpen: boolean) => {
    setOrderPopup(isOpen);
  }

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
        <Navbar/>
        <Hero/>
        <Books />
        <Banner/>
        <AppStore/>
        <AllBooks/>
        <Testimonial/>
        <Footer/>
        <Modal isOpen={orderPopup} onClose={() => handleOrderPopup(false)}/>
      </div>
    </>
  )
}
