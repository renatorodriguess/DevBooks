'use client'

import React from "react";
import Image from "next/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Person1 from '../../../assets/website/Person1.png'
import Person2 from '../../../assets/website/Person2.png'
import Person3 from '../../../assets/website/Person3.png'
import Person4 from '../../../assets/website/Person4.png'
import Person5 from '../../../assets/website/Person5.png'

const testimonialData = [
  {
    id: 1,
    name: "Victor Henrique",
    text: "Incrível como uma livro de 1975 pode ser tão atual e mostrar tão bem os erros cometidos até hoje, se você como leitor ter um minimo de inteligencia e conseguir abstrair coisas que obviamente estão datadas, você irá ver o quanto o autor foi assertivo.",
    img: Person1,
  },
  {
    id: 2,
    name: "Carolina Lima",
    text: "Este livro é uma coletânea de abordagens e comportamentos que vão te ajudar a sair da mediocridade e se tornar um excelente programador. Você vai perceber que quase todos, se não todos, os programadores que admira segue ideias apresentadas aqui.",
    img: Person2,
  },
  {
    id: 3,
    name: "Felipe Oliveira",
    text: "O livro ensina bem e contém exercícios para fixar o conhecimento do livro. Também pode ser usado como consulta caso já saiba de algum tópico avançado. Recomendo fortemente se tiver dificuldades em algoritmos e estruturas de dados como eu tenho.",
    img: Person3,
  },
  {
    id: 4,
    name: "Juliana Martins",
    text: "O livro traz um contexto exceente do ambiente de desenvolvimento de sistemas e programação. As dicas de proficcionais experientes sobre como construir e manter um bom código de programa sao muito valiosas e aplicáveis ao dia a dia. Muito Bom!",
    img: Person4,
  },
  {
    id: 5,
    name: "Matheus Rodrigues",
    text: "O livro claramente é uma junção rica das histórias de vida, atitudes, experiências pessoais e profissionais que ele considera ou poderiam ser considerados fundamentos de uma conduta ética e não ética, me supreendi com o livro. Excelente a leitura.",
    img: Person5,
  },
]; 


const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
                <div data-aos="fade-up" className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        O que os clientes dizem?
                    </p>
                    <h1 className="text-4xl font-bold text-black dark:text-white mt-3">Depoimentos</h1>
                </div> 
                {/* Card Section */}
                <div data-aos="zoom-in">
                  <Slider {...settings}>
                      {testimonialData.map((item) => (
                        <div key={item.id}>
                          <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                            <div>
                              <Image src={item.img} alt=""className="w-20 h-20 rounded-full object-cover" />
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