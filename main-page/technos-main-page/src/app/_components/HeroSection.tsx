"use client"
import Logo from "../../../public/technos-logo.png"
import Image from "next/image"


export default function HeroSection() {
  return (
    <div className="pb-24 flex items-center justify-center h-[90vh] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center relative">
          <div className="absolute pointer-events-none">
            <Image
              src={Logo}
              alt="Technos empresa junior"
              height={600}
              width={600}
              className="animate-spin-slow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
