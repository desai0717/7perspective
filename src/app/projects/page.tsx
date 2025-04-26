"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import the ImageGallery component
const ImageGallery = dynamic(() => import("./components/ImageGallery"), { ssr: false });

// Project data with multiple images
const projects = [
  {
    id: 1,
    name: "Modern Villa Design",
    images: [
      "/projects/villa/villa1.jpg",
      "/projects/villa/villa2.jpg",
      "/projects/villa/villa3.jpg",
      "/projects/villa/villa4.jpg",
    ],
  },
  {
    id: 2,
    name: "Urban Landscape Concept",
    images: [
      "/projects/Urban/urban1.jpg",
      "/projects/Urban/urban2.jpg",
      "/projects/Urban/urban3.jpg",
      "/projects/Urban/urban4.jpg",
    ],
  },
  {
    id: 3,
    name: "Sustainable Housing Project",
    images: [
      "/projects/sustainable/sustainable1.jpg",
      "/projects/sustainable/sustainable2.jpg",
      "/projects/sustainable/sustainable3.jpg",
      "/projects/sustainable/sustainable4.jpg",
    ],
  },
  {
    id: 4,
    name: "Row House Project",
    images: [
      "/projects/rowhouse/rowhouse1.jpg",
      "/projects/rowhouse/rowhouse2.jpg",
      "/projects/rowhouse/rowhouse3.jpg",
    ],
  },
  {
    id: 5,
    name: "Coastal Resort Design",
    images: [
      "/projects/coastal/coastal1.jpg",
      "/projects/coastal/coastal2.jpg",
      "/projects/coastal/coastal3.jpg",
      "/projects/coastal/coastal4.jpg",
      "/projects/coastal/coastal5.jpg",
      "/projects/coastal/coastal6.jpg",
    ],
  },
  // Add more projects similarly
];

export default function ProjectsPage() {
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [galleryTitle, setGalleryTitle] = useState<string>("");

  const openGallery = (images: string[], title: string) => {
    setSelectedImages(images);
    setGalleryTitle(title);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setGalleryTitle("");
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
              onClick={() => openGallery(project.images, project.name)}
            >
              <div className="relative h-45 w-full bg-white shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105">
                <Image
                  src={project.images[0]} // Show the first image as preview
                  alt={project.name}
                  fill
                  objectFit="object-cover"
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

        {selectedImages && (
          <ImageGallery
            images={selectedImages}
            title={galleryTitle}
            onClose={closeGallery}
          />
        )}
      </div>
    </div>
  );
}
