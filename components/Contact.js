"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendEmail = async () => {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Sent Successful");
    }
  };

  return (
    <div id='contact' className='text-black bg-gray-100 px-5 md:px-10 py-10 bg-image'>
      <h1 className='text-3xl md:text-4xl font-bold my-10 text-[#0E2744] uppercase text-center'>Contact Us</h1>
      
      <div className='flex flex-col md:flex-row justify-between gap-10'>
        {/* Contact Info */}
        <div className='bg-[#0E2744] text-white rounded-md p-5 w-full md:w-1/2'>
          <div className='mb-4'>
            <span className='font-bold'>🏢 Office Address:</span>
            <p>4th Floor, Ste 4SW, 950 SW 5th St. Miami, FL 33130</p>
          </div>
          <div className='mb-4'>
            <span className='font-bold'>📱 Whatsapp:</span>
            <p>+1 (954) 662-7679</p>
          </div>
          <div className='mb-4'>
            <span className='font-bold'>📞 Phone:</span>
            <p>+1 (786) 745-5713</p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 bg-red-500 w-fit px-3 py-2 rounded-md">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-xl hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-xl hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className='flex flex-col gap-3 w-full md:w-1/2'>
          <input 
            type='text' 
            className='p-2 border border-[#0E2744] rounded-md' 
            placeholder='Enter Your Email'  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea 
            className='p-2 border border-[#0E2744] rounded-md h-32' 
            placeholder='Enter Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button 
            type="button" 
            onClick={handleSendEmail} 
            className='px-4 py-2 bg-[#0E2744] text-white rounded-md hover:bg-[#081b34] transition duration-300'>
            Send Email
          </button>

          <Link href='/privacy' className='text-sm underline text-center'>Privacy & Policy</Link>
          <p className='text-center'>© 2025 AT Construction Works. All rights reserved.</p>
        </form>
      </div>
    </div>  
  );
}

export default Contact;
