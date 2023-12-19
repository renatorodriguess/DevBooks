'use client'

import React, {useState} from "react";
import Image from "next/image";
import Book1 from '../../../assets/books/book1.jpg'
import Book2 from '../../../assets/books/book2.jpg'
import Book3 from '../../../assets/books/book3.jpg'
import Vector from '../../../assets/website/blue-pattern.png'

const ImageList = [
    {
      id: 1,
      img: Book1,
      title: "His Life will forever be Changed",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Book2,
      title: "Who's there",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Book3,
      title: "Lost Boy",
      description:
        "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

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
                    <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                        {/* main image */}
                        <div className="max-w-full h-64 sm:h-[450px] overflow-hidden flex justify-center items-center">
                        <Image className="w-[310px] h-[310px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto" src={imageId} alt=""/>
                        </div>
                        <div>
                            {/* other image */}
                            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                                {ImageList.map((data) =>(
                                    <Image 
                                        key={data.id}
                                        src={data.img} alt=""
                                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                        onClick={() =>{
                                            setImageId(
                                                data.id === 1 ? Book1 :
                                                data.id === 2 ? Book2 :
                                                Book3
                                            );
                                            setTitle(data.title);
                                            setDescription(data.description)
                                        }}
                                    
                                    
                                    
                                    />
                                ))

                                }
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;