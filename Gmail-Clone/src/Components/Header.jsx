import React, { useState, useEffect } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';

const Tooltip = ({ text, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded-md opacity-90">
          {text}
        </div>
      )}
    </div>
  );
};

function Header() {
  const [searchValue, setSearchValue] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      const updatedHistory = [searchValue, ...searchHistory].slice(0, 5); 
      setSearchHistory(updatedHistory);
      localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    }
    setSearchValue(''); 
  };

  useEffect(() => {
    // Check if the Gmail icon SVG is loading
    const gmailIcon = document.querySelector('#gmailIcon');
    if (gmailIcon) {
      console.log("Gmail icon loaded successfully.");
    } else {
      console.log("Gmail icon failed to load.");
    }
  }, []);

  return (
    <div className="bg-[#F6F8FC] flex items-center justify-between shadow-md p-3 md:p-4 lg:p-6 h-16">
      {/* Menu Icon */}
      <Tooltip text="Menu">
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200 focus:outline-none">
          <svg 
            className="w-6 h-6 text-gray-800"
            fill="currentColor"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
      </Tooltip>

      {/* Gmail Icon and Text */}
      <div className="flex items-center mr-auto  mb-1 space-x-2">
        <svg 
          id="gmailIcon" // Add ID for targeting
          className="w-12 h-8 text-red-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="M12 13.295l9.5-6.5H2.5L12 13.295zm0 2.605l-9.5-6.5v13h19v-13l-9.5 6.5z"></path>
        </svg>
        <span className="text-xl mt-1 font-medium  text-[#666969]">Gmail</span>
      </div>

     {/* Search Bar */}
      {/* Search Bar */}
<div className="relative flex-grow max-w-xl ml-20 md:ml-[280px]">
  <input
    type="text"
    className="w-full pl-12 pr-14 py-2 rounded-full bg-[#EAF1FB] text-gray-800 focus:outline-none focus:ring-2 h-12 focus:ring-blue-500"
    placeholder="Search mail"
    value={searchValue}
    onChange={handleSearchChange}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    }}
  />
  <svg 
    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20" 
    height="20" 
    fill="currentColor"
  >
    <path d="M10 2a8 8 0 105.3 14.7l4.7 4.6 1.4-1.4-4.6-4.7A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
  </svg>

  <button>
    <svg
      className="rounded-full hover:bg-gray-200 focus:outline-none w-7 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="currentColor"
    >
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
    </svg>
  </button>   
</div>

     


      {/* User and Additional Icons */}
      <div className="flex items-center gap-2">  
        <svg 
          className="rounded-full hover:bg-gray-200 focus:outline-none w-7 h-6 text-gray-700" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="24" 
          height="24" 
          fill="currentColor"
        >
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
        </svg>
        <CiSettings className="rounded-full hover:bg-gray-200 focus:outline-none w-7 h-6 text-gray-700" />
        <FaRegUser className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
}

export default Header;
