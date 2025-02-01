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
    <div id='contact' className='text-black bg-gray-100 px-10 py-10 bg-image'>
        <h1 className='text-4xl font-bold my-10 text-[#0E2744] uppercase'>Contact US</h1>
        <div className='flex justify-between '>

            <div className='bg-[#0E2744] text-white h-fit rounded-md'>
                <div className='px-5 py-2'>
                    <span className='font-bold'>Office Address:</span>
                    4th Floor, Ste 4SW, 950 SW 5th St. Miami, FL 33130
                </div>
                <div className='px-5 py-2'>
                    <span className='font-bold'>Whatsapp:</span>
                    +1 (954) 662-7679
                </div>
                <div className='px-5 py-2'>
                    <span className='font-bold'>Phone:</span>
                    +1 (786) 745-5713
                </div>
                <div className="px-5 py-2 ml-5 mb-2  flex space-x-4 bg-red-500 w-fit px-2 py-2"> 
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-white text-xl hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="text-white text-xl hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
            </div>
            <form className='flex flex-col gap-2 w-1/2'>
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