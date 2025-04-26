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

    // Original code with a fixed background image and no blur effect
    // <div className="fixed inset-0 bg-gray-100 bg-opacity-90 z-50 flex flex-col items-center justify-center px-4">
    //   <button onClick={onClose} className="absolute top-5 right-5 text-gray-600 text-2xl">&times;</button>

    //   <div className="relative w-full max-w-4xl h-[60vh] mb-6">
    //     <Image
    //       src={images[currentIndex]}
    //       alt={`Image ${currentIndex + 1}`}
    //       fill
    //       className="object-contain rounded-md"
    //     />

    //     {/* Arrows */}
    //     <button
    //       onClick={prev}
    //       className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-3xl font-bold hover:text-gray-800"
    //     >
    //       &#8249;
    //     </button>
    //     <button
    //       onClick={next}
    //       className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-3xl font-bold hover:text-gray-800"
    //     >
    //       &#8250;
    //     </button>
    //   </div>

    //   <h2 className="text-gray-500 text-2xl mb-4 italic">{title}</h2>

    //   <div className="flex gap-3 justify-center overflow-x-auto w-full max-w-4xl pb-4 pt-4">
    //     {images.map((img, index) => (
    //       <div
    //         key={index}
    //         className={`relative w-24 h-16 cursor-pointer border-3 ${currentIndex === index ? "border-gray-600 scale-120" : "border-transparent"
    //           } transition-transform transform hover:scale-105`}
    //         onClick={() => setCurrentIndex(index)}
    //       >
    //         <Image src={img} alt={`Thumb ${index}`} fill className="object-cover" />
    //       </div>
    //     ))}
    //   </div>

    // </div>

    // Full-screen overlay with blurred background image
    <div className="fixed inset-0 bg-gray-100 bg-opacity-90 z-50 flex items-center justify-center px-4">
      {/* Background image (blurred + grayscale + low opacity) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images[currentIndex]}
          alt="Background"
          fill
          className="object-cover opacity-20 grayscale"
        />
      </div>

      {/* Foreground content */}
      <div className="z-10 flex flex-col items-center justify-center w-full">
        <button onClick={onClose} className="absolute top-5 right-5 text-gray-800 text-2xl">&times;</button>

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
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 text-3xl font-bold hover:text-gray-800"
          >
            &#8249;
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 text-3xl font-bold hover:text-gray-800"
          >
            &#8250;
          </button>
        </div>

        <h2 className="text-gray-800 text-2xl mb-4 italic">{title}</h2>

        <div className="flex gap-3 justify-center overflow-x-auto w-full max-w-4xl pb-4 pt-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative w-24 h-16 cursor-pointer border-3 ${currentIndex === index ? "border-gray-600 scale-120" : "border-transparent"
                } transition-transform transform hover:scale-105`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image src={img} alt={`Thumb ${index}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ImageGallery;
