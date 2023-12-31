'use client'

import React, {useState, useEffect} from "react";
import Image from "next/image";
import darkPng from '../../../assets/website/dark-mode-button.png'
import lightPng from '../../../assets/website/light-mode-button.png'

const DarkMode = () => {
const [theme, setTheme] = useState (() => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('theme') || 'light';
  } else {
    return 'light';
  }
})

useEffect(() => {
  if (typeof window !== 'undefined') {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}, [theme]);

    

    return(
        <>
            <div className="relative md:ml-7">
                <Image src={darkPng} alt="Light Image" 
                className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0
                ${theme === 'dark' ? "opacity-0" : "opacity-100"}`}
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <Image src={lightPng} alt="Dark Image"
                className="w-12 cursor-pointer duration-300 "
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
            </div>
        
        </>
    )
}

export default DarkMode;