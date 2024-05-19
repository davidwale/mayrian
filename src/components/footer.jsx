import React from 'react';

const Footer = () => {
  return (
      <footer className="bg-gray-900 border border-neutral-950 text-gray-400 py-10 hexagon-pattern">
          <div className="absolute inset-0 bg-black-900"></div>
          <hr className='w-full' />
          <div className='flex flex-row'>
              <div class="vertical-line"></div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-40 mt-20">
        <div className="w-1/3 space-y-4 text-sm h-full">
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
          <h3 className="text-white font-bold">Navigation Links</h3>
          <ul className='text-sm'>
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Virtual Estimates</a></li>
            <li><a href="#" className="hover:text-white">Testimonial</a></li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-white font-bold">Legal & Policy</h3>
          <ul>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-white hover:text-blue-600"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white hover:text-red-600"><i className="fab fa-pinterest-p"></i></a>
            <a href="#" className="text-white hover:text-pink-600"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white hover:text-gray-600"><i className="fab fa-houzz"></i></a>
          </div>
        </div>
              </div>
              <div>
                  
              </div>
            </div>
          <div className="mt-8 pt-4 flex flex-row text-gray-600">
              <hr className='w-full mt-3' />
              <p className='w-full m-0 p-0 text-center'>| &copy;2024. All rights reserved | Designed by <a href="#" className="text-green-500 hover:underline">Mayrian</a> |</p>
              <hr className='w-full mt-3' />
      </div>
    </footer>
  );
};

export default Footer;
