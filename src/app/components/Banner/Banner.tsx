import React from "react";
import Image from "next/image";
import LibraryImg from '../../../assets/website/library.jpg'
import { GrSecure } from 'react-icons/gr'
import { TbTruckDelivery } from "react-icons/tb";
import { PiCreditCardBold } from "react-icons/pi";
import { LuBookOpenCheck } from "react-icons/lu";

const Banner = () => {
    return <>
        <div className="py-10">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                    {/* Image Section */}
                    <div>
                        <Image src={LibraryImg} alt=""  
                        className="max-w-[400px] block mx-auto h-[350px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
                        />
                    </div>
                    {/* Text Content Section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0">

                        <h1 className="text-3xl sm:text-4xl font-bold">Livraria nas suas palmas</h1>
                        <p className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At maiores dolor culpa vero placeat consectetur voluptatem.</p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <GrSecure
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400"/>
                                <p>Livros De Qualidade</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <TbTruckDelivery
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400"/>
                                <p>Entrega Rápida</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <PiCreditCardBold  
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400"/>
                                <p>Método Fácil De Pagamento</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <LuBookOpenCheck
                                className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400"/>
                                <p>Receba Ofertas De Livros</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Banner;