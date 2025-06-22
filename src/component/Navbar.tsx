import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
     <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Title */}
        <h1 className="text-3xl font-bold text-indigo-800">Portfolio</h1>
        <ul className="flex justify-end space-x-8 text-base font-semibold text-gray-800">
          <li>
            <Link href="#hero" className="hover:text-blue-600 transition duration-200">
              Home
            </Link>
          </li>
           <li>
            <Link href="#contact" className="hover:text-blue-600 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600 transition duration-200">
                Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
