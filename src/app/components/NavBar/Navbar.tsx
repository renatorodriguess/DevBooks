'use client'
import Image from 'next/image';
import DarkMode from './DarkMode';
import Logo from '../../../assets/website/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import React, { useState } from "react";
import Modal from '../Modal/Modal';



const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#"
  },
  {
    id: 2,
    name: "Best Seller",
    link: "#/services",
  }
];

const DropdownLinks = [
  {
    id: 1,
    name: "Mais Vendidos",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Autores",
    link: "/#",
  },
]

const Navbar = () =>{
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
            <a href="#">
              <Image src={Logo} alt='Logo' className='w-10' />
            </a>
            DevBooks</div>
          <div className='flex items-center justify-between gap-4'>
            <div>
              <DarkMode />
            </div>
            <ul className='items-center gap-4 hidden sm:flex'>
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link}
                    className='inline-block py-4 px-4 hover:text-primary duration-200'
                    >{menu.name}
                  </a>
                </li>
              ))}
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
                    {
                      DropdownLinks.map((data) => (
                        <li key={data.id}>
                          <a href={data.link}
                          className='inline-block w-full rounded-md p-2 hover:bg-primary/20 shadow-md '
                          >{data.name}</a>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </li>
            </ul>
            <button  onClick={handleOpenModal} className='bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3 hover:scale-105 duration-300'>
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