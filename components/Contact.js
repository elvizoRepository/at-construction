"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
 

function Contact() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = async() =>{
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, message }),
          });
          const data = await res.json();
          if (res.ok) {
            alert("Sent Successful")
        } 
    }
  return (
    <div id='contact' className='bg-gray-200 p-4 bg-image'>
        <h1 className='text-6xl font-bold mt-5 mb-5 text-[#0E2744] uppercase'>Contact US</h1>
        <div className='flex justify-between '>

            <div>
                <div className='ml-5'>
                    <span className='font-bold text-[#0E2744]'>Office Address:</span>
                    4th Floor, Ste 4SW, 950 SW 5th St. Miami, FL 33130
                </div>
                <div className='ml-5'>
                    <span className='font-bold text-[#0E2744]'>Whatsapp:</span>
                    +1 (954) 662-7679
                </div>
                <div className='ml-5'>
                    <span className='font-bold text-[#0E2744]'>Phone:</span>
                    +1 (786) 745-5713
                </div>
                <div className="ml-5 flex space-x-4 border bg-gray-400 w-fit px-2 py-2"> 
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white text-xl hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-white text-xl hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
            </div>
            <form className='flex flex-col gap-2 border w-1/2'>
                <input type='text' className='p-2 border border-[#0E2744]' placeholder='Enter Your Email'  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                <textarea className='p-2 border border-[#0E2744]' value={message}
              onChange={(e) => setMessage(e.target.value)} />
              
                <button onClick={handleSendEmail} className='px-4 py-2 bg-[#0E2744] text-white'>Send Email</button>
                <Link href='/privacy' className='text-sm underline'>Privacy & Policy</Link>
                <p>Copyright © 2025 AT Construction Works. All rights reserved.</p>
            </form>
        </div>
    </div>  
  )
}

export default Contact