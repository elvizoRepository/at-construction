import Link from 'next/link'
import React from 'react'

function AboutUs() {
  return (
    <div id='about' className='bg-white text-black mt-5 px-5 md:px-10 py-20'>
      <div className='flex items-center p-2'>
        <p className='uppercase text-3xl font-bold text-gradient'>Know <br /> More <br /> About Us</p>
        <img className='w-[50px] h-[50px]' src='/arrow.svg' draggable={false}/>
      </div>
      <div className='md:ml-80 mt-10 flex flex-col gap-10'>
        <div>
          <p className='font-bold text-lg uppercase underline'>
            <span className='text-[#C12425]'>Anthony Gabris</span> – Founder of AT Construction Works
          </p>
          <div className='flex flex-col md:flex-row gap-2 mt-2'>
            <img className='w-[200px] rounded-md' src='./founder.jpeg' />
            <p className='text-sm md:w-[350px] opacity-70 text-justify'>
              Anthony Gabris founded AT Construction Works in 2017 with a vision to deliver high-quality, reliable, and innovative construction solutions...
            </p>
          </div>
        </div>
        <div>
          <p className='font-bold text-lg uppercase'>AT Construction Works</p>
          <p className='text-sm opacity-70'>
            At <strong>AT Construction Works</strong>, we are more than just builders—we are visionaries shaping the future of construction...
          </p>
        </div>
        <div>
          <p className='font-bold text-lg uppercase '>Who We Are</p>
          <p className='text-sm opacity-70'>
            <strong>AT Construction Works</strong> is a trusted name in the construction industry, offering a full spectrum of services...
          </p>
        </div>
        <div>
          <p className='font-bold text-lg uppercase'>Our Mission</p>
          <p className='text-sm opacity-70'>
            At <strong>AT Construction Works</strong>, we are more than just builders—we are visionaries shaping the future of construction...
          </p>
        </div>

        <div>
          <p className='text-[#0E2744] font-bold text-5xl uppercase border-l-8 border-[#C12425] pl-1'>What We Do</p>
          <div className='grid md:grid-cols-2 gap-5 p-2'>
            <div>
              <img className='rounded-md' src='./rs.jpg' />
              <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Residential Construction</p>
              <p className='opacity-70'>Bringing dream homes to life with modern designs and durable structures.</p>
            </div>
            <div>
              <img className='rounded-md' src='./cm.jpg' />
              <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Commercial Projects</p>
              <p className='opacity-70'>Creating functional and aesthetically pleasing spaces for businesses to thrive.</p>
            </div>
            <div>
              <img className='rounded-md' src='./rn.jpg' />
              <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Renovations & Remodeling</p>
              <p className='opacity-70'>Transforming old spaces into new, stylish, and efficient environments.</p>
            </div>
            <div>
              <img className='rounded-md' src='./cm.jpg' />
              <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Infrastructure Development</p>
              <p className='opacity-70'>Building strong foundations that support communities and businesses.</p>
            </div>
          </div>
        </div>
        <div>
          <p className='font-bold text-lg uppercase'>Our Commitment</p>
          <p className='text-sm opacity-70'>
            At AT Construction Works, we believe in building beyond bricks and mortar—we build relationships, trust, and lasting value...
            <Link href='/#contact' className='text-[#C12425] underline'>Contact us today</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
