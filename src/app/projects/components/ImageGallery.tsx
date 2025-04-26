"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };


  // Inside your component:
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prev();
      } else if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [prev, next]);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center px-4">
      <button onClick={onClose} className="absolute top-5 right-5 text-white text-2xl">&times;</button>
      <h2 className="text-white text-2xl mb-4">{title}</h2>

      <div className="relative w-full max-w-4xl h-[60vh] mb-6">
        <Image
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          fill
          className="object-contain rounded-md"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300"
        >
          &#8249;
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl font-bold hover:text-gray-300"
        >
          &#8250;
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto w-full max-w-4xl pb-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative w-24 h-16 cursor-pointer border-2 ${currentIndex === index ? "border-white" : "border-transparent"
              }`}
            onClick={() => setCurrentIndex(index)}
          >
            <Image src={img} alt={`Thumb ${index}`} fill className="object-cover rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
