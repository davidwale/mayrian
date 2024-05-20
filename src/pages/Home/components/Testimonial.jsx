import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const images = [
  { id: 1, src: '/images/Header-bg.png', text: 'Private Property' },
  { id: 2, src: '/images/education-bg.png', text: 'Education Purpose' },
  { id: 3, src: '/images/marketplace-bg.png', text: 'MarketPlace' },
  { id: 4, src: '/images/health-bg.png', text: 'Health Facility' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [iconPosition, setIconPosition] = useState({ x: 0, y: 0 });
  const rightTextRef = useRef(null);
  const leftImageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const rightSection = rightTextRef.current;
      const leftSection = leftImageRef.current;

      const rightScrollTop = rightSection.scrollTop;
      const maxRightScrollTop = rightSection.scrollHeight - rightSection.clientHeight;

      if (rightScrollTop >= maxRightScrollTop) {
        leftSection.style.position = 'relative';
      } else {
        leftSection.style.position = 'sticky';
        leftSection.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageHover = (e) => {
    setIsHovered(true);
    setIconPosition({ x: e.clientX, y: e.clientY });
  };


  const handleImageLeave = () => {
    setIsHovered(false);
  };

  const currentImage = images[currentIndex];
  const progressBarWidth = ((currentIndex + 1) / images.length) * 100;

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex px-10 py-4 top-bg" style={{ height: '200vh' }}>
      <div ref={leftImageRef} className="w-1/2 h-screen sticky top-0" style={{ height: '100vh' }}>
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <motion.img
            src="/images/Rectangle-img.png"
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div ref={rightTextRef} className="w-1/2 overflow-y-auto scrollbar-hide">
        <div className="relative z-10 p-8 space-y-8 text-white">
          <h1 className='text-3xl'>
            We are dedicated to addressing 
            the evolving requirements of the 
            world's most dynamic companies.
          </h1>
          <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='text-xs pl-7 satoshi-regular'>
                At Creon, we handpick cutting-edge AI projects and 
                offer our community and token holders early access 
                and investment opportunities. Our community 
                actively contributes to the growth and profitability of 
                these projects, creating a dynamic ecosystem of 
                innovation and shared success.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='text-xs pl-7 satoshi-regular'>
                At Creon, we handpick cutting-edge AI projects and 
                offer our community and token holders early access 
                and investment opportunities. Our community 
                actively contributes to the growth and profitability of 
                these projects, creating a dynamic ecosystem of 
                innovation and shared success.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='text-xs pl-7 satoshi-regular'>
                At Creon, we handpick cutting-edge AI projects and 
                offer our community and token holders early access 
                and investment opportunities. Our community 
                actively contributes to the growth and profitability of 
                these projects, creating a dynamic ecosystem of 
                innovation and shared success.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='text-xs pl-7 satoshi-regular'>
                At Creon, we handpick cutting-edge AI projects and 
                offer our community and token holders early access 
                and investment opportunities. Our community 
                actively contributes to the growth and profitability of 
                these projects, creating a dynamic ecosystem of 
                innovation and shared success.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative w-full h-screen overflow-hidden hover:cursor-pointer"
          onMouseMove={handleImageHover}
          onMouseLeave={handleImageLeave}
          onClick={handleNextImage}
        >
          <AnimatePresence>
            <motion.img
              key={currentImage.src}
              src={currentImage.src}
              alt={`Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 inset-0 bg-black px-6 bg-opacity-50 flex flex-col">
            <div className='absolute bottom-10 w-11/12'>
              <div className="flex">
                <p className="text-xl text-white mr-4">{currentImage.id}</p>
                <div className="w-full h-0.5 flex items-center mt-3 bg-gray-800">
                  <motion.div
                    className="h-1 bg-white"
                    style={{ width: `${progressBarWidth}%` }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </div>
                <h1 className="text-3xl text-white ml-4">{currentImage.id}</h1>
              </div>
              <p className="text-white">{currentImage.text}</p>
            </div>
            {isHovered && (
              <div
                className="absolute z-50"
                style={{ left: iconPosition.x - 640, top: iconPosition.y - 50 }}
              >
                <IoArrowForwardCircleOutline size={50} color="grey" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
