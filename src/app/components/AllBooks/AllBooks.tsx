'use client'

import Image from "next/image";
import Modal from "../Modal/Modal";
import Book4 from '../../../assets/books/book4.jpg'
import Book5 from '../../../assets/books/book5.jpg'
import Book6 from '../../../assets/books/book6.jpg'
import Book7 from '../../../assets/books/book7.jpg'
import Book8 from '../../../assets/books/book8.jpg'
import { FaStar } from "react-icons/fa6";
import { useState } from "react";

const booksData = [
    {
      id: 1,
      img: Book4,
      title: "Entendendo Algoritmos",
      rating: 4.8,
      author: "Aditya Y. Bhargava",
    },
    {
      id: 2,
      img: Book5,
      title: "Expressões regulares",
      rating: 4.9,
      author: "Aurelio Marinho Jargas",
    },
    {
      id: 3,
      img: Book6,
      title: "O Programador Apaixonado",
      rating: 4.7,
      author: "Chad Fowler",
    },
    {
      id: 4,
      img: Book7,
      title: "Refatoração: Aperfeiçoando o Design de Códigos Existentes",
      rating: 4.9,
      author: "Martin Fowler",
    },
    {
      id: 5,
      img: Book8,
      title: "Controlando Versões com Git e GitHub",
      rating: 4.8,
      author: "Alexandre Aquiles",
    },
    
  ];

const AllBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    return <>
        <div id="trending" className="py-10">
            <div className="container py-10 placeholder-gray-100">
                {/* header */}
                <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Livros  em Alta!</p>
                    <h1 className="text-black dark:text-white text-3xl font-bold">Melhores Livros</h1>
                </div>
                {/* card */}
                <div data-aos="slide-up">
                    <div onClick={handleOpenModal} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 cursor-pointer">
                        {booksData.map((data) => (
                                <div className="space-y-3 " key={data.id}>
                                    <Image src={data.img}  alt=""
                                        className="h-[220px] w-[150px] object-cover rounded-md hover:scale-105 duration-200 "
                                    />
                                    <div>
                                        <h2 className="font-semibold text-black dark:text-white">{data.title}</h2>
                                        <p className="text-sm text-gray-700 dark:text-gray-400">{data.author}</p>
                                        <div className="text-black dark:text-white flex items-center gap-1">
                                            <FaStar 
                                                className="text-yellow-500" />
                                                <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>  
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <button className="text-center mt-16                                                         cursor-pointer bg-primary text-white py-2 px-5 rounded-full">Veja Mais</button>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>  
    </>
}

export default AllBooks;