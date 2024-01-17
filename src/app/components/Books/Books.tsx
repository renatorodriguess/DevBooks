'use client'
import React, {useState} from "react";
import Image from "next/image";
import Book1 from "../../../assets/books/book1.jpg";
import Book2 from "../../../assets/books/book2.jpg";
import Book3 from "../../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";
import Modal from '../Modal/Modal';

const booksData = [
    {
      id: 1,
      img: Book1,
      title: "Código Limpo",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
      
    },
    {
      id: 2,
      img: Book2,
      title: "O Programador Pagmático",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
    },
    {
      id: 3,
      img: Book3,
      title: "O Mítico Homem-Mês",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
    },
  ];

const Books = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    return (
        <>
          <div className="py-10">
            <div className="container">
              <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
                  Best Sellers
                </p>
                <h1 className="text-3xl font-bold text-black dark:text-white">Os Mais Vendidos</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                {booksData.map((data) => (
                  <div onClick={handleOpenModal} key={data.id}
                    data-aos="zoom-in"
                    className="rounded-2xl bg-white dark:bg-gray-800 cursor-pointer hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
                  >
                    <div className="h-[100px]">
                      <Image
                        src={data.img}
                        alt=""
                        className="max-w-[100px] block mx-auto transform -translate-y-14
                      group-hover:scale-105 duration-300 shadow-md"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <div className="w-full flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                      </div>
                      <h1 className="text-black dark:text-white group-hover:text-white text-xl font-bold duration-300 line-clamp-2">{data.title}</h1>
                      <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                        Clique no botão abaixo e adquira o seu.
                      </p>
                      <button onClick={handleOpenModal}
                        className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                      >
                        Peça Agora
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
          </div>
        </>
      );
}

export default Books;