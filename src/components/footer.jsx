import React from 'react';
import { FaFacebookSquare, FaPinterestSquare, FaHome } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Footer = () => {
  return (
      <footer className="bg-gray-900 border border-neutral-950 text-gray-400 py-10 hexagon-pattern">
          <hr className='w-full' />
          <div className='flex flex-row mx-40'>
              <div class="vertical-line"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-40 my-20">
        <div className="w-1/3 space-y-4 text-xs 2xl:text-4xl h-full">
          <p>
            Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus. Porta pretium purus risus sed posuere. Lorem ipsum dolor sit amet consectetur. Metus convallis nulla volutpat tempus. Porta pretiu
          </p>
          <p>
            <strong>Address:</strong> 6505 Liberty Rd, Gwynn Oak, MD 21207
          </p>
          <p>
            <strong>Phone:</strong> (+1) 200 3107
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-white font-bold 2xl:text-5xl">Navigation Links</h3>
          <ul className='text-xs 2xl:text-4xl'>
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Virtual Estimates</a></li>
            <li><a href="#" className="hover:text-white">Testimonial</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-white font-bold 2xl:text-5xl">Legal & Policy</h3>
          <ul className='text-xs 2xl:text-4xl'>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
          
        </div>
              </div>
             <div className='flex flex-col overflow-hidden justify-items-center'>
                <hr className="h-full bg-white w-[1px] origin-center ml-6 2xl:ml-14" /> 
                <div className="flex h-full flex-col border gap-3 py-4 px-3 2xl:py-10 text-2xl">
                    <a href="#" className="text-blue-600">
                    <FaFacebookSquare className='2xl:text-7xl' />
                    </a>
                    <a href="#" className="text-red-600">
                    <FaPinterestSquare className='2xl:text-7xl' />
                    </a>
                    <a href="#" className="text-pink-600">
                    <FaSquareInstagram className='2xl:text-7xl' />
                    </a>
                    <a href="#" className="text-gray-600">
                    <FaHome className='2xl:text-7xl' />
                    </a>
                </div>
                <hr className="h-full bg-white w-[1px] origin-center ml-6  2xl:ml-14" /> 
                </div>

            </div>
          <div className="flex flex-row text-gray-600 relative">
            <hr className='w-full h-px bg-gray-200' />
            <p className='w-full mb-2 p-0 text-xs 2xl:text-5xl text-center -mt-3 relative z-10'>| &copy;2024. All rights reserved | Designed by <a href="#" className="text-green-500 hover:underline">Mayrian</a> |</p>
            <hr className='w-full h-px bg-gray-200' />
          </div>
    </footer>
  );
};

export default Footer;
