import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-4'>
        <div className='logo'>
            <img src='./logo.png' className='w-full' draggable={false}/>
        </div>
        <div className='flex flex-col text-lg font-bold'>
            <Link href='/' className='hover:text-[#C12425] border-b-2 border-[#0E2744]'>HOME</Link>
            <Link href='/#about' className='hover:text-[#C12425] border-b-2 border-[#0E2744]'>BOUT US</Link>
            <Link href='/#case-study' className='hover:text-[#C12425] border-b-2 border-[#0E2744]'>CASE STUDIES</Link>
            <Link href='/#gallery' className='hover:text-[#C12425] border-b-2 border-[#0E2744]'>GALLERY</Link>
            <Link href='/#contact' className='hover:text-[#C12425] border-b-2 border-[#0E2744]'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar