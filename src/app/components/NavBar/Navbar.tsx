'use client'

import Modal from '../Modal/Modal';
import Image from 'next/image';
import DarkMode from './DarkMode';
import Logo from '../../../assets/website/logo.png'
import { Link } from 'react-scroll';
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useState } from "react";


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='shadow-lg text-black bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div className='font-bold text-2xl sm:text-3xl flex gap-2'>
            <a href="/">
              <Image src={Logo} alt='Logo' className='w-10' />
            </a>
            DevBooks
          </div>
          <div className='flex items-center justify-between gap-4'>
            <div>
              <DarkMode />
            </div>
            <ul className='items-center gap-2 hidden sm:flex'>
              <li>
                <Link className='inline-block py-4 pl-5 hover:text-primary duration-200 cursor-pointer' to='home' smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li>
                <Link className='inline-block py-4 px-4 hover:text-primary duration-200 cursor-pointer' to='bestsellers' smooth={true} duration={500}>
                  Best Sellers
                </Link>
              </li>
              {/* dropdown section */}
              <li className='group relative cursor-pointer'>
                <a href="/#"
                  className='flex h-[72px] items-center gap-[2px]'
                >
                  Links
                  <span>
                    <FaCaretDown
                      className='transition-all duration-300 group-hover:rotate-180'
                    />
                  </span>
                </a>
                {/* dropdown Link section */}
                <div className='absolute -left-9 z-[9999px] hidden group-hover:block text-black bg-white p-2 shadow-sm w-[150px] '>
                  <ul>
                    <Link className='inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md' to='trending' smooth={true} duration={500}>
                      <li>
                        Em Alta
                      </li>
                    </Link>

                    <Link className='inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md' to='reviews' smooth={true} duration={500}>
                      <li>
                        Comentários
                      </li>
                    </Link>
                  </ul>
                </div>
              </li>
            </ul>
            <button onClick={handleOpenModal} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>
              Peça
              <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer' />
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;