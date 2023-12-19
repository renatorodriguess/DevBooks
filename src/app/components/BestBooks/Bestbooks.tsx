'use client'
import React from "react";
import Image from "next/image";
import Book1 from "../../../assets/books/book1.jpg";
import Book2 from "../../../assets/books/book2.jpg";
import Book3 from "../../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";


const booksData = [
    {
      id: 1,
      img: Book1,
      title: "Who's there",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
    },
    {
      id: 2,
      img: Book2,
      title: "His Life",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
    },
    {
      id: 3,
      img: Book3,
      title: "Lost boys",
      descripiton: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem."
    },
  ];

const BestBooks = () => {
    return <>
        <div className="py-10">
            <div className="container">
                {/*Header Section*/}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Tendência de Livros
                    </p>
                    <h1 className="text-3xl font-bold">Melhores Livros</h1>
                    <p className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem.</p>
                </div>
                {/*Card Section*/}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                    {booksData.map((book) =>(
                       <div key={book.id} className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-secondary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                            <div className="h-[100px]">
                                <Image src={book.img} alt=""
                                className="max-w-[100px] block mx-auto transform -translate-y-1/4 group-hover:scale-105 duration-300 shadow-md"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <div className="w-full flex items-center justify-center">
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                    <FaStar className="text-yellow-500"/>
                                </div>
                                <h1 className="text-xl font-bold">{book.title}</h1>
                                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.descripiton}</p>
                                <button className="bg-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary">Compre Agora!</button>
                            </div>
                       </div>     
                    ))}
                </div>
            </div>
        </div>
    
    </>
}

export default BestBooks;