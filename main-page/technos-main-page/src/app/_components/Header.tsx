"use client"
import { useState } from "react"
import Image from "next/image"
import Logo from "../../../public/technos-logo.png"
import {X, Menu } from 'lucide-react';

export default function Header(){
    const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } 
  }
    return(
        <header className="sticky top-0 bg-gray-800 pb-0">
            <div className="py-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Image src={Logo} alt="Technos empresa junior" height={44} width={44}/>
                        <nav className="hidden md:flex gap-6 text-white items-center">
                            <button onClick={() => scrollToSection("sobre")} className="text-white hover:text-teal-400">SOBRE</button>
                            <button onClick={() => scrollToSection("services")} className="text-white hover:text-teal-400">SERVIÇOS</button>
                            <button onClick={() => scrollToSection("diferenciais")} className="text-white hover:text-teal-400">DIFERENCIAIS</button>
                            {/*<button onClick={() => scrollToSection("feedback")} className="text-white hover:text-teal-400">FEEDBACK</button>*/}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}