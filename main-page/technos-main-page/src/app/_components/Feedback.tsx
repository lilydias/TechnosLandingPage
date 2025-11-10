"use client"

import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Quote } from 'lucide-react';;

export default function Feedback(){
    const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
   <section className="container mx-auto px-4 py-24 overflow-hidden" id="feedback">
        <h1 className="uppercase text-center text-3xl md:text-[54px] md:leading-[60px] font-bold text-transparent bg-gradient-to-b from-teal-300 via-teal-500 to-teal-700 bg-clip-text mb-2">Feedback</h1>
        <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-6xl p-10 mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Suamí Gomes</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Presidente
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Maurício Melo</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Vice-presidente
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Marcos Vinícius</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Projetos
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Murilo Castelhano</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Projetos
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Carlos Augusto</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Projetos
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Cícero Gabriel</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Gestão de Pessoas
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Vinícius Oliveira</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Secretário
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <Card className="h-auto bg-white border-r-teal-200 border-l-teal-500 border-b-teal-400 border-t-teal-300">
                            <CardHeader className="text-center pb-2">
                                <Quote className="w-8 h-8 mx-auto text-teal-600 transform rotate-180" />
                            </CardHeader>
                            <CardContent className="text-center p-4">
                                <h3 className="text-lg font-semibold text-teal-600 mb-1">Júlio Silva</h3>
                                <CardDescription className="text-sm text-gray-600">
                                    Marketing
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </section>
  )
}
