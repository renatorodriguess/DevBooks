'use client'

import React, {useState} from "react";
import Image from "next/image";
import Book1 from '../../../assets/books/book1.jpg'
import Book2 from '../../../assets/books/book2.jpg'
import Book3 from '../../../assets/books/book3.jpg'
import Vector from '../../../assets/website/blue-pattern.png'

const Hero = () => {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("His life will forever be changed");
    const [description, setDescription ] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, ea nisi fugit suscipit rerum dignissimos porro id adipisci sequi tempore.")

    const bgImage = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      };

    return (
        <div className="bg-hero-banner min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
        >
            <div className="container pb-8 sm:pb-0">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    {/* text-content-area */}
                    <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{title}
                        <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary text-sm text-right">Por Desconhecido</p>
                        </h1>
                        <p className="text-sm">
                            {description}
                        </p>
                        <div>
                            <button
                            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200"
                            >Peça Agora</button>
                        </div>
                    </div>
                    {/* image area */}
                    <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                        {/* main image */}
                        <div className="max-w-full h-64 sm:h-[450px] overflow-hidden flex justify-center items-center">
                        <Image className="w-[390px] h-[390px] sm:[h-450px] sm[w-450px] sm:scale-125 object-contain mx-auto" src={imageId} alt=""/>
                        </div>
                        {/* main image */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;