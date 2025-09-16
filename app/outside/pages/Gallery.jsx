"use client";
import React, { useState } from "react";
import topview from "../../assets/topview.jpg";
import awasen from "../../assets/awasen.png";
import helicopter from "../../assets/helicopterisland.jpg";
import me1 from "../../assets/me1.png";
import espada from "../../assets/espada.png";
import bontoc from "../../assets/bontoc.jpg";
import ifugao from "../../assets/ifugao.png";
import Image from "next/image";
import { X } from "lucide-react";

// Modal component for displaying the clicked image
const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-80 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div
        className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 transition z-50"
        >
          <X size={28} />
        </button>
        <div className="relative w-full h-96">
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-1 text-black">
            {image.title}
          </h3>
          <p className="text-gray-600 text-sm">{image.alt}</p>
        </div>
      </div>
    </div>
  );
};

const MoodBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image data with titles
  const images = [
    {
      src: topview,
      alt: "Top view Helicopter island, Snorkling Area",
      title: "Helicopter Island, El Nido, Palawan",
    },
    {
      src: awasen,
      alt: "Tallest Waterfalls in Ilocos Region",
      title: "Aw asen Falls, Ilocos Sur",
    },
    { src: helicopter, alt: "Helicopter Island", title: "El Nido, Palawan" },
    {
      src: bontoc,
      alt: "Bontoc view",
      title: "Maligcong Rice Terraces, Bontoc MP",
    },
    { src: me1, alt: "Mt. Ulap", title: "Mount Ulap, Itogon, Benguet" },
    { src: ifugao, alt: "Ifugao rice terraces", title: "Ifugao, Banaue" },
    { src: espada, alt: "Espadang Bato", title: "Espadang Bato, Rizal" },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const renderImage = (image, className) => (
    <div
      className={`group rounded-2xl overflow-hidden shadow-lg relative cursor-pointer ${className}`}
      onClick={() => handleImageClick(image)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>
      {/* Title */}
      <p className="absolute bottom-4 left-4 text-white text-base md:text-lg font-bold opacity-0 transition-opacity duration-500 transform group-hover:opacity-100">
        {image.title}
      </p>
    </div>
  );

  return (
    <>
      <div className="min-h-screen relative bg-white p-2 flex items-center justify-center">
        <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full max-w-8xl h-[800px]">
          {/* Image 1 (Left Tall) */}
          {renderImage(images[0], "col-span-3 row-span-4")}
          {/* Image 2 (Top Middle Square) */}
          {renderImage(images[1], "col-span-3 row-span-2")}
          {/* Image 3 (Top Right Wide) */}
          {renderImage(images[2], "col-span-6 row-span-2")}
          {/* Image 4 (Middle Wide) */}
          {renderImage(images[3], "col-span-6 row-span-2")}
          {/* Image 5 (Middle Right Tall) */}
          {renderImage(images[4], "col-span-3 row-span-4")}
          {/* Image 6 (Bottom Left Wide) */}
          {renderImage(images[5], "col-span-6 row-span-2")}
          {/* Image 7 (Bottom Middle Small) */}
          {renderImage(images[6], "col-span-3 row-span-2")}
        </div>
      </div>
      {isModalOpen && (
        <Modal image={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default MoodBoard;
