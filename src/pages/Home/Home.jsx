import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar';
import Header from './components/Header';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from '../../components/footer';
import { RotatingLines } from 'react-loader-spinner';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div
          style={{
            zIndex: '999999',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#000',
            position: 'fixed',
            top: '0',
            left: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RotatingLines
            height={80}
            width={80}
            strokeColor="#A9A9A9"
            ariaLabel="rotating-lines-loading"
            strokeWidth="5"
          />
        </div>
      )}
      {!isLoading && (
        <div className='bg-neutral-900'>
          <Navbar />
          <Header />
          <Testimonial />
          <Services />
          <Projects />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
