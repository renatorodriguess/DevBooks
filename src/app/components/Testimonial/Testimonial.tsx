'use client'

import React, {createContext} from "react";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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


const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    
    return <>
        <div className="pb-10">
            <div className="container">
                {/* Header */}
                <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        O que os clientes dizem?
                    </p>
                    <h1 className="text-3xl font-bold">Depoimentos</h1>
                    <p className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae sapiente velit, officia suscipit voluptatibus magnam voluptatem.</p>
                </div> 
                {/* Card Section */}
                <div data-aos="zoom-in">
                  <Slider {...settings}>
                      {testimonialData.map((item) => (
                        <div key={item.id}>
                          <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                            <div>
                              <Image src={item.img} alt="" width={80} height={80} className="rounded-full object-cover" />
                            </div>
                            <div>
                              <p className="text-gray-500 text-sm">{item.text}</p>
                              <h1 className="text-xl font-bold text-black/80 dark:text-white ">{item.name}</h1>
                            </div>
                          <p className="absolute text-black/20 z-10 top-0 right-0 font-serif text-9xl">,,</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                </div>
            </div>

        </div>
    
    </>
}

export default Testimonial;