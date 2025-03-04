'use client';

import { useState } from 'react';
import Image from 'next/image';

const ProductImages = ({ images }: { images: string[] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div>
      <Image
        src={images[currentImage]}
        width={1000}
        height={1000}
        alt='product-image'
        className='min-h-[300px] object-cover object-center'
      />

      <div className='flex gap-2'>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`border cursor-pointer  ${index === currentImage ? 'border-cyan-500' : 'border-gray-400'} hover:border-cyan-500`}
          >
            <Image src={image} width={100} height={100} alt='product-image' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
