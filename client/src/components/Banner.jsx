import React, { useEffect, useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"


const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
    "https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    ];

    const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
    const intervalId = setInterval(() => {
        nextSlide();
    }, 10000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='w-screen h-[650px] relative'>
              <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
                  className='w-[400vw] h-full flex transition-transform duration-1000'>
                    <img
                      className='w-screen h-full object-cover'
                      src={slides[0]}
                      loading='priority'
                      alt="imgOne" 
                    />
                  <img
                      className='w-screen h-full object-cover'
                      src={slides[1]}
                      loading='priority'
                      alt="imgTwo" 
                    />
                  <img
                      className='w-screen h-full object-cover'
                      src={slides[2]}
                      loading='priority'
                      alt="imgThree" />
                  <img
                      className='w-screen h-full object-cover'
                      src={slides[3]}
                      loading='priority'
                      alt="imgFour" />
            </div>
              <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
                  <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
                  hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                      <HiArrowLeft />
                  </div>
                  <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center 
                  hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
                      <HiArrowRight />
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Banner