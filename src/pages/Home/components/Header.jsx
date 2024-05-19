import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    id: 1,
    src: '/images/Header-bg.png',
    text: 'Private Property',
  },
  {
    id: 2,
    src: '/images/education-bg.png',
    text: 'Education Purpose',
  },
  {
    id: 3,
    src: '/images/marketplace-bg.png',
    text: 'MarketPlace',
  },
  {
    id: 4,
    src: '/images/health-bg.png',
    text: 'Health Facility',
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];
  const progressBarWidth = ((currentIndex + 1) / images.length) * 100;

  return (
    <div className="relative w-full h-screen overflow-hidden">
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex pt-64 justify-between p-8">
        <div className="text-white">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="2xl:text-8xl text-6xl font-medium">Project Tile</h1>
            <p className="w-[400px] mt-32 font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis mollis enim,
              at mattis metus consectetur eget. Nulla tempor condimentum eros, non eleifend leo venenatis et.
            </p>
          </motion.div>
        </div>
        <div className="text-white w-96">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex">
              <p className="text-xl mr-4">{currentImage.id}</p>
              <div className="w-full h-0.5 flex items-center mt-3 bg-gray-800">
                <motion.div
                  className="h-1 bg-white"
                  style={{ width: `${progressBarWidth}%` }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              </div>
            </div>
            <br />
            <p>{currentImage.text}</p>
          </motion.div>
          <motion.div className="mt-40">
            <h1 className="2xl:text-8xl text-6xl float-right font-medium">{currentImage.id}</h1>
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-end mb-24">
        <div className="flex space-x-2">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              className={`w-2 h-1.5 opacity-85 ${
                currentIndex === index ? 'bg-white' : 'bg-gray-500'
              }`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
