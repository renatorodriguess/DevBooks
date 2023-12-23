import React from "react";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaLocationArrow, FaMobileAlt} from "react-icons/fa";
import footerLogo from "../../../assets/website/logo.png";

const FooterLinks = [
    {
        id: 1,
        title: "Home",
        link: "/#" ,     
    },
    {
        id: 2,
        title: "Sobre",
        link: "/#sobre" ,     
    },
    {
        id: 3,
        title: "Contato",
        link: "/#contato" ,     
    },
    {
        id: 4,
        title: "Blog",
        link: "/#blog" ,     
    },
];


const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-gray-950">
          <section className="container">
            <div className=" grid md:grid-cols-3 py-5">
              {/* company Details */}
              <div className=" py-8 px-4 ">
                <h1 className="text-black dark:text-white sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                  <Image src={footerLogo} alt="Logo" className="max-w-[50px] " />
                  DevBooks
                </h1>
                <p className="text-black dark:text-white">
                  Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Possimus, voluptate.{" "}
                </p>
                <br />
                <div className="flex items-center gap-3 text-black dark:text-white">
                  <FaLocationArrow />
                  <p>São Paulo, Brasil</p>
                </div>
                <div className="flex items-center gap-3 mt-3 text-black dark:text-white">
                  <FaMobileAlt />
                  <p>+55 123456789</p>
                </div>
                {/* Social Handle */}
                <div className="flex items-center gap-3 mt-6 text-black dark:text-white">
                  <a href="#">
                    <FaInstagram className="text-3xl text-black dark:text-white" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl text-black dark:text-white" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl text-black dark:text-white" />
                  </a>
                </div>
              </div>
              {/* Links */}
              <div className="flex items-center justify-center col-span-2 md:pl-10 ">
                <div className="">
                  <div className="py-8 px-4 ">
                    <h1 className="text-black dark:text-white sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                      Links Importantes
                    </h1>
                    <ul className={`flex flex-col gap-3`}>
                      {FooterLinks.map((data) => (
                        <li key={data.id}  className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary space-x-1 text-gray-500">
                          <span>&#11162;</span>
                          <span>{data.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
}

export default Footer;