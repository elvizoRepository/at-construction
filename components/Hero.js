import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-4 px-10 py-10 overflow-hidden'>
        <div className='flex flex-col w-[60%]'>
            <h1 className='text-8xl font-bold text-black'>BUILD YOUR DREAM</h1>
            <p className='mt-4 text-lg text-gray-700 border-l-8 border-[#C12425] pl-1'>
                We specialize in creating high-quality construction projects that bring your vision to life. Our team of experts works closely with you every step of the way to ensure your project is built to the highest standards, on time, and within budget.
            </p>
            <p className='text-right text-gray-500 uppercase font-bold '>BORN Since 2017</p>
        </div>
        
        <div className='w-1/2'>
            <img src='./hero.jpg' className='w-full rounded-md'/>
        </div>
    </div>
  )
}

export default Hero
 