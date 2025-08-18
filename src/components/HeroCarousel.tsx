import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import slide1 from "./Assets/slider 1.png";
import slide2 from "./Assets/slider 2.png";


  const HeroCarousel: React.FC = () => {
    const slides = [
      {
        title: "Proud Salesforce Partner",
        subtitle:
          "Backed by certified experts delivering enterprise-grade results",
        image: slide1,
      },
      {
        title: "Trusted Salesforce Implementation",
        subtitle: "Salesforce implementation and innovation",
        image: slide2,
      },
      {
        title: "Digital Transformation Excellence",
        subtitle: "Leading cloud solutions for modern businesses",
        image:
          "https://ik.imagekit.io/DebajyotiG/4CECLoud%20Lab%20Dummy%20Website/3.jpg?updatedAt=1754054330503",
      },
    ];
  
    return (
      <div className="relative w-full bg-gradient-to-br h-[calc(100vh-20px)] min-h-[400px] max-h-[800px] pt-16 md:pt-20">
        {/* Main Carousel */}
        <div className="relative h-full">
          <Carousel
            className="w-full h-full"
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false, // Prevents stopping when user clicks/swipes
                stopOnMouseEnter: false, // Prevents stopping when mouse hovers
                stopOnFocusIn: false, // Prevents stopping when focused (keyboard navigation)
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full h-[calc(100vh-110px)] min-h-[400px] max-h-[800px]">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                      }}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10" />
  
                    {/* Text Content - Responsive positioning and sizing */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-8 z-20 max-w-6xl mx-auto">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light max-w-2xl mx-auto">
                        {slide.subtitle}
                      </p>
                      <button className="bg-white text-blue-900 px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base">
                        Send Inquiry
                      </button>
                    </div>
  
                    {/* Carousel indicators */}
                    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                      {slides.map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                            i === index ? "bg-white scale-125" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Navigation Arrows - Responsive sizing and positioning */}
            <CarouselPrevious className="absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
            <CarouselNext className="absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30 z-40 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
          </Carousel>
        </div>
      </div>
    );
  };
  
  export default HeroCarousel;

