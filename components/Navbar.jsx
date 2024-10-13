import React, { useState } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { FaGlobe } from 'react-icons/fa';

import languagesData from '../public/data/languages.json';

const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <header className="text-gray-600 body-font bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex flex-wrap lg:p-5 p-3 items-center justify-between">
        {/* Signup button for mobile */}
        <div className="md:hidden flex items-center">
          <button className="inline-flex items-center bg-white-100 border-0 border-custom-border-color py-1 px-3 rounded-lg text-base  signup-btn">
            Sign up
          </button>
        </div>

        {/* Logo - Center on mobile, left on larger screens */}
        <a className="flex title-font font-medium items-center text-gray-900 lg:mb-0 mb-0 md:mb-0 mx-auto md:mx-0">
          <img src="/images/food-logo.png" width={200} height={200} alt="Logo" />
       
        </a>
        

        {/* Language dropdown and login button - hidden on mobile */}
        <div className="hidden md:flex items-center gap-x-4 md:ml-auto">
          {/* Language dropdown */}
            {/* Login button */}
            <button className="inline-flex items-center bg-white-100 border border-custom-border-color py-1 px-4 focus:outline-none hover:bg-gray-200 hover:px-6 rounded-lg text-lg">
            Log in
          </button>

          <div className="  flex items-center">
          <button className="inline-flex items-center bg-white-100 border-0 border-custom-border-color py-1 px-3 rounded-lg text-base ml-4 signup-btn">
            Sign up
          </button>
        </div>
          <div className="language-dropdown flex items-center gap-x-2 border px-3 py-1 rounded hover:custom-border-color cursor-pointer">
            <FaGlobe size={20} className='text-custom-border-color' />
            <select id="language" value={selectedLanguage} onChange={handleLanguageChange} className="p-1 font-bold hover:outline-none">
              {languagesData.map((lang, index) => (
                <option key={index} value={lang.suffix}>
                  {lang.suffix}
                </option>
              ))}
            </select>
          </div>

        
        
        </div>

        {/* Cart icon - visible on mobile */}
        <div className=" flex items-center ml-3">
          <span>
            <GiShoppingCart size={35} style={{ transform: 'rotate(-10deg)' }} className='text-custom-button-color' />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
