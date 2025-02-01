import React from 'react'

function Hero() {
  return (
    <div className='flex items-center gap-4 p-4 h-[350px] overflow-hidden'>
        <div className='flex flex-col'>
            <h1 className='text-9xl font-bold '>BUILD YOUR DREAM</h1>
            <p className='text-right text-gray-500 uppercase font-bold'>BORN Since 2017</p>
        </div>
        
        <div className=''>
            <img src='./hero.jpg' className='w-full'/>
        </div>
    </div>
  )
}

export default Hero