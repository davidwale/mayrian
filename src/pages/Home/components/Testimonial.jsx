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
  const [isRightScrolledToBottom, setIsRightScrolledToBottom] = useState(false);
  const leftImageRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

 const handleScroll = () => {
  const leftImageRect = leftImageRef.current.getBoundingClientRect();
  const isLeftImageFullyInView = leftImageRect.top >= 0 && leftImageRect.bottom <= window.innerHeight;
  const rightScrollTop = rightTextRef.current.scrollTop;
  const maxRightScrollTop = rightTextRef.current.scrollHeight - rightTextRef.current.clientHeight;

  if (isLeftImageFullyInView && rightScrollTop < maxRightScrollTop) {
    leftImageRef.current.style.position = 'static';
    leftImageRef.current.style.top = 0;
  } else {
    leftImageRef.current.style.position = 'sticky';
  }

  setIsRightScrolledToBottom(rightScrollTop >= maxRightScrollTop);

  rightTextRef.current.scrollTop = rightScrollTop;
};


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentImage = images[currentIndex];
  const progressBarWidth = ((currentIndex + 1) / images.length) * 100;

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex px-10 py-4">
      <div className="w-1/2 h-full" style={{ position: 'relative' }}>
        <div ref={leftImageRef} style={{ position: isRightScrolledToBottom ? 'fixed' : 'static', width: '100%', height: '100%', overflow: 'hidden' }}>
          <img
            src="/images/health-bg.png"
            alt="Fixed"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-1/2 h-full" ref={rightTextRef}>
        <div
          className="relative z-10 p-8 space-y-8 text-black"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
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
