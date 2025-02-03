import React from 'react';

function Gallery() {
  return (
    <div id='gallery' className='px-4 sm:px-6 md:px-10 py-10 bg-[#C12425] bg-image2'>
      {/* Heading */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-white'>
        OUR GALLERY
      </h1>

      {/* Gallery Images */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <img src="./img1.jpeg" className="w-full rounded-lg" alt="Gallery Image 1" />
        <img src="./img2.jpeg" className="w-full rounded-lg" alt="Gallery Image 2" />
        <img src="./img3.jpeg" className="w-full rounded-lg" alt="Gallery Image 3" />
        <img src="./img4.jpeg" className="w-full rounded-lg" alt="Gallery Image 4" />
        <img src="./img5.jpeg" className="w-full rounded-lg" alt="Gallery Image 5" />
        <img src="./img6.jpeg" className="w-full rounded-lg" alt="Gallery Image 6" />
        <img src="./img7.jpeg" className="w-full rounded-lg" alt="Gallery Image 7" />
        <img src="./img8.jpeg" className="w-full rounded-lg" alt="Gallery Image 8" />
      </div>
    </div>
  );
}

export default Gallery;