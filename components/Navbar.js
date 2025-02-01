import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-4'>
        <div className='logo'>
            <img src='./logo.png' className='w-full' draggable={false}/>
        </div>
        <div className='flex flex-col text-lg '>
            <Link href='/' className='hover:text-white'>HOME</Link>
            <Link href='/#about' className='hover:text-white'>ABOUT US</Link>
            <Link href='/#case-study' className='hover:text-white'>CASE STUDIES</Link>
            <Link href='/#gallery' className='hover:text-white'>GALLERY</Link>
            <Link href='/#contact' className='hover:text-white'>CONTACT</Link>
        </div>
    </div>
  )
}

export default Navbar