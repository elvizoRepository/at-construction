import Link from 'next/link'
import React from 'react'

function AboutUs() {
  return (
    <div id='about' className='bg-white text-black mt-5 px-10 py-20'>
        <div className='flex items-centerp-2'>
            <p className='uppercase text-3xl font-bold text-gradient'>Know <br/> More <br/>About Us</p>
            <img className='w-[50px] h=[50px]' src='/arrow.svg'/>
        </div>
        <div className='ml-80 mt-10 flex flex-col gap-10'>
            <div className=''>
                <p className='font-bold text-lg uppercase underline'><span className='text-[#C12425]'>Anthony Gabris</span> – Founder of AT Construction Works</p>
                <div className='flex gap-2 mt-2'>
                    <img className='w-[200px] rounded-md' src='./founder.jpeg'/>
                    <p className='text-sm w-[350px] opacity-70 text-justify'>Anthony Gabris founded AT Construction Works in 2017 with a vision to deliver high-quality, reliable, and innovative construction solutions. With a strong commitment to excellence and craftsmanship, he has built a company that prioritizes durability, efficiency, and client satisfaction in every project.</p>
                </div>
            </div>
            <div>
                <p className='font-bold text-lg uppercase'>AT Construction Works</p>
                <p className='text-sm opacity-70'>At AT Construction Works, we are more than just builders—we are visionaries shaping the future of construction with excellence, precision, and integrity. With a deep-rooted passion for craftsmanship, we specialize in delivering high-quality construction solutions that stand the test of time.</p>
            </div>
            <div>
                <p className='font-bold text-lg uppercase '>Who We Are</p>
                <p className='text-sm opacity-70'>AT Construction Works is a trusted name in the construction industry, offering a full spectrum of services, from residential and commercial building projects to renovations and infrastructure development. Our team of skilled professionals brings years of expertise, ensuring every project is executed with the highest standards of quality and safety.</p>
            </div>
            <div>
                <p className='font-bold text-lg uppercase'>Our Mission</p>
                <p className='text-sm opacity-70'>
                    At <strong>AT Construction Works</strong>, we are more than just builders—we are visionaries shaping the future of construction with excellence, precision, and integrity. 
                    With a deep-rooted passion for craftsmanship, we specialize in delivering high-quality construction solutions that stand the test of time.
                </p>
            </div>

            <div className=''>
                <p className='text-[#0E2744] font-bold text-5xl uppercase border-l-8 border-[#C12425] pl-1'>What We Do</p>
                <div className='flex justify-between p-2'>
                    <div className='w-[500px]'>
                        <img className=' rounded-md' src='./rs.jpg '/>
                        <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Residential Construction</p>
                        <p className='opacity-70'>Bringing dream homes to life with modern designs and durable structures.</p>
                    </div>
                    <div className='w-[500px]'>
                        <img className=' rounded-md' src='./cm.jpg'/>
                        <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Commercial Projects</p>
                        <p className='opacity-70'>Creating functional and aesthetically pleasing spaces for businesses to thrive.</p>
                    </div>
                </div>
                <div className='flex justify-between p-2'>
                    <div className='w-[500px]'>
                        <img className=' rounded-md' src='./rn.jpg '/>
                        <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Renovations & Remodeling</p>
                        <p className='opacity-70'>Transforming old spaces into new, stylish, and efficient environments.</p>
                    </div>
                    <div className='w-[500px]'>
                        <img className=' rounded-md' src='./cm.jpg'/>
                        <p className='font-bold text-4xl border-l-8 border-[#0E2744] pl-1 mt-1'>Infrastructure Development</p>
                        <p className='opacity-70'>Building strong foundations that support communities and businesses.</p>
                    </div>
                </div>
            </div>
            <div>
                <p className='font-bold text-lg uppercase'>Our Commitment</p>
                <p className='text-sm opacity-70'>At AT Construction Works, we believe in building beyond bricks and mortar—we build relationships, trust, and lasting value. Our dedication to innovation, sustainability, and superior craftsmanship ensures that every project we undertake is a testament to our commitment to excellence.Whether you need a new construction, renovation, or a custom-built project, AT Construction Works is your reliable partner in turning ideas into reality. <Link href='/contact' className='text-[#C12425] underline'>Contact us today</Link></p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs