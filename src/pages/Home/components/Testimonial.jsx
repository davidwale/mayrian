import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: '/images/Header-bg.png', text: 'Private Property' },
  { id: 2, src: '/images/education-bg.png', text: 'Education Purpose' },
  { id: 3, src: '/images/marketplace-bg.png', text: 'MarketPlace' },
  { id: 4, src: '/images/health-bg.png', text: 'Health Facility' },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const rightTextRef = useRef(null);
  const leftImageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const rightSection = rightTextRef.current;
      const leftSection = leftImageRef.current;

      const rightScrollTop = rightSection.scrollTop;
      const maxRightScrollTop = rightSection.scrollHeight - rightSection.clientHeight;

      if (rightScrollTop >= maxRightScrollTop) {
        // When right section has fully scrolled, make the left section scroll with the page
        leftSection.style.position = 'relative';
      } else {
        // While right section is scrolling, keep the left section fixed
        leftSection.style.position = 'sticky';
        leftSection.style.top = '0';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentImage = images[currentIndex];
  const progressBarWidth = ((currentIndex + 1) / images.length) * 100;

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex px-10 py-4" style={{ height: '200vh' }}>
      <div ref={leftImageRef} className="w-1/2 h-screen sticky top-0" style={{ height: '100vh' }}>
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src={currentImage.src}
            alt={currentImage.text}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div ref={rightTextRef} className="w-1/2 h-screen overflow-y-auto">
        <div className="relative z-10 p-8 space-y-8 text-black">
          <ul>
            {Array.from({ length: 20 }, (_, i) => (
              <li key={i} className="mb-4">
                Scrollable Text Item {i + 1}
              </li>
            ))}
          </ul>
        </div>
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
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="text-white text-center"
            >
              <h1 className="text-4xl font-bold">{currentImage.text}</h1>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-800">
              <motion.div
                className="h-full bg-yellow-500"
                style={{ width: `${progressBarWidth}%` }}
                transition={{ duration: 10, ease: 'linear' }}
              />
            </div>
            {isHovered && (
              <motion.button
                onClick={handleNextImage}
                className="absolute bg-white p-2 rounded-full"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Next
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
