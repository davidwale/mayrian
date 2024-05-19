import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 py-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between font-medium">
        <div className="w-full flex justify-center items-center space-x-4 md:space-x-6 lg:space-x-8">
          <a href="#home" className="text-white hover:border-b-2 hover:border-yellow-500 transition duration-300">
            Home
          </a>
          <a href="#services" className="text-white hover:border-b-2 hover:border-yellow-500 transition duration-300">
            Services
          </a>
          <a href="#projects" className="text-white hover:border-b-2 hover:border-yellow-500 transition duration-300">
            Projects
          </a>
          <a href="#estimates" className="text-white hover:border-b-2 hover:border-yellow-500 transition duration-300">
            Virtual Estimates
          </a>
          <a href="#testimonial" className="text-white hover:border-b-2 hover:border-yellow-500 transition duration-300">
            Testimonial
            </a>
         <button className="md:mt-0 bg-[#FAF400] text-black font-bold py-2 px-5 rounded-full hover:bg-yellow-600 transition duration-300">
          Get In Touch
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
