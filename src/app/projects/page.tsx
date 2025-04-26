"use client";

import React, { useState } from "react";
import Image from "next/image";

// Static project data
const projects = [
  {
    id: 1,
    name: "Modern Villa Design",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 2,
    name: "Urban Landscape Concept",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 3,
    name: "Sustainable Housing Project",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 4,
    name: "Commercial Building Facade",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 5,
    name: "Interior Renovation",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 6,
    name: "Public Park Redesign",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 7,
    name: "Another Great Project",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
  {
    id: 8,
    name: "Yet Another Design",
    imageUrl: "/kara-eads-L7EwHkq1B2s-unsplash.jpg",
  },
];

export default function ProjectsPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openPopup = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8 md:px-24 lg:px-32">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Projects</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          Explore our architectural works and concepts. Click on a project to view it in detail.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className=""
              onClick={() => openPopup(project.imageUrl)}
            >
              <div className="relative h-45 w-full bg-white shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {project.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {isPopupOpen && selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="relative w-[90vw] max-w-4xl">
              <Image
                src={selectedImage}
                alt="Project Details"
                layout="responsive"
                width={1200}
                height={800}
                objectFit="contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
