import React from 'react';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 px-4 sm:px-6 md:px-10 py-10 overflow-hidden'>
      {/* Text Content */}
      <div className='w-full md:w-[60%]'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-black'>
          BUILD YOUR DREAM
        </h1>
        <p className='mt-4 text-base sm:text-lg text-gray-700 border-l-8 border-[#C12425] pl-1'>
          We specialize in creating high-quality construction projects that bring your vision to life. Our team of experts works closely with you every step of the way to ensure your project is built to the highest standards, on time, and within budget.
        </p>
        <p className='text-right text-sm sm:text-base text-gray-500 uppercase font-bold mt-4'>
          BORN Since 2017
        </p>
      </div>

      {/* Image */}
      <div className='w-full md:w-1/2 mt-6 md:mt-0'>
        <img src='./hero.jpg' className='w-full rounded-md' alt='Hero Image' />
      </div>
    </div>
  );
}

export default Hero;