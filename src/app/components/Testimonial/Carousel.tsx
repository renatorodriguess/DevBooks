'use client'

import React, { createContext } from "react";
import Image from "next/image";
import Slider  from 'react-slick'


const testimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Satya Narayan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return ( <>
        <Slider {...settings}>
        {testimonialData.map((item) => (
          <div key={item.id}>
            <div className="flex flex-col gap-4 shadow-lg py-0 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
              <div>
                <Image src={item.img} alt="" width={80} height={80} className="rounded-full object-cover" />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.text}</p>
                <h1 className="text-xl font-bold text-black/80 dark:text-white">{item.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
      );
}
export default Carousel;