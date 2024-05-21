import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: 1, src: '/images/service-img-1.png', title: 'Private Property' },
  { id: 2, src: '/images/service-img-2.png', title: 'Education Purpose' },
  { id: 3, src: '/images/service-img-3.png', title: 'MarketPlace' },
  { id: 4, src: '/images/service-img-4.png', title: 'Health Facility' },
  { id: 5, src: '/images/service-img-5.png', title: 'Health Facility' },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % services.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollTo({
        left: slider.clientWidth * currentIndex / 3,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const progressBarWidth = ((currentIndex + 3) / services.length) * 100;

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-white text-5xl 2xl:my-14 2xl:text-7xl 3xl:text-9xl font-bold text-center my-10">Our Services</h1>
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <div
          ref={sliderRef}
          className="w-full h-full gap-5 flex overflow-x-scroll scroll-smooth scrollbar-hide"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ width: '33.33%' }} 
            >
              <img src={service.src} alt={service.title} className="w-full h-64 2xl:h-96 object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex my-10 2xl:text-6xl w-full justify-center">
        <p className='text-white'>1</p>
        <div className="w-40 2xl:w-[50rem] 2xl:h-1.5 h-0.5 2xl:mt-6 flex items-center mt-3 mx-4 bg-gray-800">
          <motion.div
            className="h-1 2xl:h-3 bg-white"
            style={{ width: `${progressBarWidth}%` }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>
        <p className='text-white'>3</p>
      </div>
    </div>
  );
};

export default Services;
