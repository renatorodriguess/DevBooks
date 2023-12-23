import React from "react";
import Image from "next/image";
import Book4 from '../../../assets/books/book4.jpg'
import Book5 from '../../../assets/books/book5.jpg'
import Book6 from '../../../assets/books/book6.jpg'
import Book7 from '../../../assets/books/book7.jpg'
import Book8 from '../../../assets/books/book8.jpg'
import { FaStar } from "react-icons/fa6";

const booksData = [
    {
      id: 1,
      img: Book4,
      title: "Entendendo Algoritmos",
      rating: 4.80,
      author: "Aditya Y. Bhargava",
    },
    {
      id: 2,
      img: Book5,
      title: "Expressões Regulares",
      rating: 4.9,
      author: "Aurélio Marinho Jargasn",
    },
    {
      id: 3,
      img: Book6,
      title: "O Programador Apaixonado",
      rating: 4.7,
      author: "Chad Fowler",
    },
    {
      id: 5,
      img: Book8,
      title: "Controlando Versões com Git",
      rating: 4.8,
      author: "Alexandre Aquiles",
    },
  ];

const AllBooks = () => {
    return <>
        <div className="py-10">
            <div className="container py-10">
                {/* Header */}
                <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Livros em Alta
                    </p>
                    <h1 className="text-4xl mt-3 font-bold text-black dark:text-white">Outras Leituras Sugeridas</h1>
                </div>
                {/* Card */}
                <div data-aos="slide-up">
                    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-14">
                        {booksData.map((data) => (
                            <div key={data.id} className="space-y-3 hover:scale-110 duration-200">
                                <Image src={data.img} alt=""
                                className="h-[230px] w-[150px] object-cover rounded-md"
                                />
                                <div>
                                    <h2 className="text-black dark:text-white font-semibold">{data.title}</h2>
                                    <p className=" text-sm text-gray-700">{data.author}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar 
                                        className="text-yellow-500"/>
                                        <span className="text-black dark:text-white">{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">Veja Mais</button>
                </div>
            </div>
        </div>
    </>
    
}

export default AllBooks;