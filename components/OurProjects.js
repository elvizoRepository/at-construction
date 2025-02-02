import { Span } from 'next/dist/trace'
import Link from 'next/link'
import React from 'react'

function OurProjects() {
  return (
    <div id='case-study' className='px-10 py-10 bg-[#0E2744] text-white'>
        <h1 className='text-6xl font-bold my-10 text-white'>OUR PROJECTS/ <span className='text-4xl text-gray-400'>CASE STUDIES</span> <span className='text-sm text-gray-500'>+100 Projects Completed</span></h1>
        <div className='flex flex-col gap-5'>
            <div className='flex'>
                <img className='flex-1 w-1/2' src='./one.jpg'/>
                <div className='flex-1 ml-5'>
                    <p className='text-2xl font-bold text-gray-500 text-right'>2025</p>
                    <p className='font-bold text-4xl border-l-8 border-[#C12425] pl-1'>Luxury Residential Villa</p>
                    <div className='mt-5 pl-5'>
                        <p>Location: Toronto, Canada</p>
                        <p>Project Type: High-End Residential Construction</p>
                        <p className='font-bold text-gray-500 underline'>Project Overview:</p>
                        <p>Our client envisioned a modern, luxurious villa with spacious interiors, high ceilings, and sustainable energy solutions. The project required a blend of aesthetics and functionality while ensuring structural durability.</p>
                        <p className='font-bold text-gray-500 underline'>Challenges:</p>
                        <ul>
                            <li>- Designing a home that maximized natural light and ventilation.</li>
                            <li>- Incorporating smart home technology without compromising aesthetics.</li>
                            <li>- Ensuring sustainability with energy-efficient materials and solar integration.</li>
                        </ul>
                        <p className='font-bold text-gray-500 underline'>Results:</p>
                        <p>The villa was completed on schedule and within budget, exceeding the client's expectations. The final design blended luxury with eco-friendliness, setting a new standard for high-end residential properties in the area.</p>
                    </div>
                  
                </div>
            </div>
            <div className='flex flex-row-reverse'>
                <img className='flex-1 w-1/2' src='./com.jpg'/>
                <div className='flex-1 ml-5'>
                    <p className='text-2xl font-bold text-gray-500 text-left'>2024</p>
                    <p className='font-bold text-4xl border-l-8 border-[#C12425] pl-1'>Commercial Development</p>
                    <div className='mt-5 pl-5'>
                        <p>Location: California, United States</p>
                        <p>Project Type: High-End Residential Construction</p>
                        <p className='font-bold text-gray-500 underline'>Project Overview:</p>
                        <p>A fast-growing business required a multi-purpose commercial complex that would house retail shops, office spaces, and a co-working hub. The structure needed to be modern, efficient, and adaptable to various business needs.</p>
                        <p className='font-bold text-gray-500 underline'>Challenges:</p>
                        <ul>
                            <li>- Balancing aesthetic appeal with functional space utilization.</li>
                            <li>- Ensuring compliance with strict commercial building codes.</li>
                            <li>- Managing high foot traffic and parking logistics.</li>
                        </ul>
                        <p className='font-bold text-gray-500 underline'>Results:</p>
                        <p>The commercial complex has become a prime business hub in California, attracting multiple tenants and boosting local business activity. The project was completed with zero safety incidents and on-time delivery.</p>
                    </div>
                  
                </div>
            </div>
        </div>
        <Link href='/more-projects' className='pt-2 pb-2 m-5'>
            <div className='bg-gray-700 border border-gray-700 hover:border-white cursor-pointer  p-2 w-fit flex'>
                <p className=''>For More Projects <br/> Click Here</p>
                <img className='w-[50px] h-[50px]' src='./arrow-more.svg'/>
            </div>
        </Link>
    </div>
  )
}

export default OurProjects