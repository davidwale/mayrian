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
    <div className="flex px-10 pt-10 py-4">
      <div ref={leftImageRef} className="w-1/2 sticky top-0">
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <motion.img
            src="/images/Rectangle-img.png"
            alt=""
            className="w-11/12 h-screen h-full max-h-[100rem] object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div ref={rightTextRef} className="w-1/2 overflow-y-auto 3xl:px-24 scrollbar-hide">
        <div className="relative z-10 text-xs 2xl:text-2xl 3xl:text-4xl p-8 space-y-8 text-white">
          <h1 className='text-3xl 2xl:text-4xl 3xl:text-6xl'>
            We are dedicated to addressing 
            the evolving requirements of the 
            world's most dynamic companies.
          </h1>
          <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='pl-7 satoshi-regular'>
                Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus.
                Porta pretium purus risus sed posuere. Elit odio tellus eget duis facilisis in
                lorem. Parturient et ut quis donec mattis at rhoncus morbi. Neque turpis non orci
                pulvinar. Luctus proin.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='pl-7 satoshi-regular'>
                Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus.
                Porta pretium purus risus sed posuere. Elit odio tellus eget duis facilisis in
                lorem. Parturient et ut quis donec mattis at rhoncus morbi. Neque turpis non orci
                pulvinar. Luctus proin.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='pl-7 satoshi-regular'>
                Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus.
                Porta pretium purus risus sed posuere. Elit odio tellus eget duis facilisis in
                lorem. Parturient et ut quis donec mattis at rhoncus morbi. Neque turpis non orci
                pulvinar. Luctus proin.
              </p>
            </div>
          </div>
           <div className='flex flex-row py-5 border-t border-white hover:cursor-pointer'>
            <div>
              <p>1</p>
            </div>
            <div className='w-full'>
              <p className='pl-7 satoshi-regular'>
                Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus.
                Porta pretium purus risus sed posuere. Elit odio tellus eget duis facilisis in
                lorem. Parturient et ut quis donec mattis at rhoncus morbi. Neque turpis non orci
                pulvinar. Luctus proin.
              </p>
            </div>
          </div>
        </div>
        <div
          className="relative w-full max-h-[100rem] text-xs 2xl:text-2xl 3xl:text-4xl h-screen overflow-hidden hover:cursor-pointer"
          onMouseMove={handleImageHover}
          onMouseLeave={handleImageLeave}
          onClick={handleNextImage}
          title='next-slide'
        >
          <AnimatePresence>
            <motion.img
              key={currentImage.src}
              src={currentImage.src}
              alt={`Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-screen h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
          <div className="absolute bottom-0 inset-0 bg-black px-6 bg-opacity-50 flex flex-col">
            <div className='absolute bottom-10 w-11/12'>
              <div className="flex">
                <p className="text-xl 2xl:text-3xl 3xl:text-5xl text-white mr-4">{currentImage.id}</p>
                <div className="w-full h-0.5 flex items-center mt-3 bg-gray-800">
                  <motion.div
                    className="h-1 3xl:h-2 bg-white"
                    style={{ width: `${progressBarWidth}%` }}
                    transition={{ duration: 5, ease: 'linear' }}
                  />
                </div>
                <p className="text-xl 2xl:text-3xl 3xl:text-5xl text-white ml-4">{currentImage.id}</p>
              </div>
              <p className="text-white">{currentImage.text}</p>
            </div>
            {isHovered && (
              <div
                className="absolute z-40"
                style={{ left: iconPosition.x - 640, top: iconPosition.y - 50 }}
              >
                <IoArrowForwardCircleOutline size={70} color="grey" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
