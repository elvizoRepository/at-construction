import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-10'>
        <div className='logo'>
            <img src='./logo.png' className='w-full ' draggable={false}/>
        </div>
        <div className='flex flex-col text-black text-lg font-bold'>
            <Link href='/' className='text-[#C12425]  text-[15px]'>HOME</Link>
            <Link href='/#about' className='hover:text-[#C12425] text-[15px]'>ABOUT US</Link>
            <Link href='/#case-study' className='hover:text-[#C12425] text-[15px]'>CASE STUDIES</Link>
            <Link href='/#gallery' className='hover:text-[#C12425] text-[15px]'>GALLERY</Link>
            <Link href='/#contact' className='hover:text-[#C12425] text-[15px]'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar