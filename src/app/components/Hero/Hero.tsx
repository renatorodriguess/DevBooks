'use client'

import React, {use, useState} from "react";
import Image from "next/image";
import Book1 from '../../../assets/books/book1.jpg'
import Book2 from '../../../assets/books/book2.jpg'
import Book3 from '../../../assets/books/book3.jpg'

const ImageList = [
    {
      id: 1,
      author: "Robert C. Martin",
      img: Book1,
      title: "Código Limpo",
      description:
        "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo.",
    },
    {
      id: 2,
      author: "Andrew Hunt e David Thomas",
      img: Book2,
      title: "O Programador Pagmático",
      description:
        "O Programador Pragmático ilustra as melhores práticas e as principais armadilhas do desenvolvimento de software. Destinado a todos envolvidos com programação, de codificadores iniciantes a programadores experientes e gerentes responsáveis por projetos de software, apresenta lições simples que promovem rápidas melhorias na produtividade pessoal, precisão e satisfação profissional.",
    },
    {
      id: 3,
      author: "Frederick P. Brooks Jr",
      img: Book3,
      title: "O Mítico Homem-Mês",
      description:
        "Poucos livros sobre gestão de projetos de software têm sido tão influentes e perenes quanto O Mítico Homem-Mês. Com uma rica mistura de fatos sobre engenharia de software e opiniões que provocam a reflexão, Frederick Brooks oferece sua visão para todos aqueles que lidam com a gestão de projetos complexos. Os ensaios deste livro vêm diretamente da experiência de Frederick como gerente de projetos para a família de computadores System/360 da IBM e, posteriormente, com o OS/360, seu massivo sistema de software.",
    },
  ];

const Hero = () => {
    const [imageId, setImageId] = useState(Book1);
    const [title, setTitle] = useState("Código Limpo");
    const [description, setDescription ] = useState("Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo.");
    const [author, setAuthor] = useState("Robert C. Martin")

    const bgImage = {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      return (
        <>
          <div
            className="bg-hero-banner min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
            style={bgImage}
          >
            <div className="container pb-8 sm:pb-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                {/* text content section */}
                <div
                  data-aos-once="true"
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
                >
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl text-white dark:text-white sm:text-6xl lg:text-7xl font-bold"
                  >
                    {title}
                    <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                      {author}
                    </p>{" "}
                  </h1>
                  <p
                    data-aos="slide-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-white dark:text-white"
                  >
                    {description}
                  </p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Peça Agora
                    </button>
                  </div>
                </div>
                {/* Image section */}
                <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
                  <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                    <Image
                      data-aos="zoom-in"
                      data-aos-once="true"
                      src={imageId}
                      alt="biryani img"
                      className="w-[300px] h-[300px] sm:h-[360px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                    />
                  </div>
                  <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                    {ImageList.map((item) => (
                      <Image key={item.id}
                        src={item.img}
                        onClick={() => {
                          setImageId(
                            item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                          );
                          setTitle(item.title);
                          setDescription(item.description);
                          setAuthor(item.author)
                        }}
                        alt="biryani img"
                        className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Hero;