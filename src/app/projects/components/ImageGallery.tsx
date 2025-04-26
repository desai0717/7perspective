'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title: string;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, onClose }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex flex-col items-center justify-center px-4">
      <button onClick={onClose} className="absolute top-5 right-5 text-white text-2xl">&times;</button>
      <h2 className="text-white text-2xl mb-4">{title}</h2>

      <div className="relative w-full max-w-3xl h-96 mb-6">
        <Image src={selected} alt="Preview" fill className="object-contain" />
      </div>

      <div className="flex gap-3 overflow-x-auto w-full max-w-3xl pb-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-24 h-16 cursor-pointer ${selected === img ? 'ring-2 ring-white' : ''}`}
            onClick={() => setSelected(img)}
          >
            <Image src={img} alt={`Thumb ${index}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
