import React from 'react'

function Gallery() {
  return (
    <div id='gallery' className='px-10 py-10 bg-[#C12425]'>
        <h1 className='text-6xl font-bold my-10 text-white'>OUR GALLERY</h1>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <img src="./img1.jpeg" className="w-full rounded-lg" />
            <img src="./img2.jpeg" className="w-full rounded-lg" />
            <img src="./img3.jpeg" className="w-full rounded-lg" />
            <img src="./img4.jpeg" className="w-full rounded-lg" />
            <img src="./img5.jpeg" className="w-full rounded-lg" />
            <img src="./img6.jpeg" className="w-full rounded-lg" />
            <img src="./img7.jpeg" className="w-full rounded-lg" />
            <img src="./img8.jpeg" className="w-full rounded-lg" />
        </div>
    </div>
  )
}

export default Gallery