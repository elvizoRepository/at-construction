"use client";
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons for the menu toggle

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility
  const menuRef = useRef(null); // Ref to track the mobile menu div

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex justify-between p-4 md:p-10 items-center'>
      {/* Logo */}
      <div className='logo w-24 md:w-32'>
        <img src='./logo.png' className='w-full' draggable={false} alt='Logo' />
      </div>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex flex-col text-black text-lg font-bold'>
        <Link href='/' className='text-[#C12425] text-[15px]'>HOME</Link>
        <Link href='/#about' className='hover:text-[#C12425] text-[15px]'>ABOUT US</Link>
        <Link href='/#case-study' className='hover:text-[#C12425] text-[15px]'>CASE STUDIES</Link>
        <Link href='/#gallery' className='hover:text-[#C12425] text-[15px]'>GALLERY</Link>
        <Link href='/#contact' className='hover:text-[#C12425] text-[15px]'>CONTACT</Link>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='md:hidden absolute top-16 right-4 bg-white shadow-lg p-4 rounded-lg flex flex-col space-y-2'
        >
          {/* Close Icon Inside the Mobile Menu */}
          <button onClick={toggleMenu} className='self-end text-black focus:outline-none'>
            <FaTimes size={20} />
          </button>

          {/* Navigation Links */}
          <Link href='/' className='text-[#C12425] text-[15px]'>HOME</Link>
          <Link href='/#about' className='hover:text-[#C12425] text-[15px]'>ABOUT US</Link>
          <Link href='/#case-study' className='hover:text-[#C12425] text-[15px]'>CASE STUDIES</Link>
          <Link href='/#gallery' className='hover:text-[#C12425] text-[15px]'>GALLERY</Link>
          <Link href='/#contact' className='hover:text-[#C12425] text-[15px]'>CONTACT</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;