import React from 'react';
import Navbar from '../../components/navbar';
import Header from './components/Header';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from '../../components/footer';

const Home = () => {
  return (
    <div className='bg-neutral-900'>
          <Navbar />
          <Header />
          <Testimonial />
          <Services />
          <Projects />
          <Footer />
    </div>
  );
};

export default Home;
