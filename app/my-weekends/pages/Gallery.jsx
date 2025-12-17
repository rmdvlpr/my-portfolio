"use client";
import { useState } from "react";
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
      src: "https://ik.imagekit.io/ramparedes/Images/Boulders.jpeg",
      alt: "Sunrise over Mt.Apo's Boulders Face",
      title: "Boulders Face, Mt. Apo, Davao Del Sur",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/awasen.png?updatedAt=1758617832077",
      alt: "Tallest Waterfalls in Ilocos Region",
      title: "Aw asen Falls, Ilocos Sur",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/helicopterisland.jpg?updatedAt=1758617832016",
      alt: "Helicopter Island",
      title: "El Nido, Palawan",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/bontoc.jpg?updatedAt=1758617824151",
      alt: "Bontoc view",
      title: "Maligcong Rice Terraces, Bontoc MP",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/ApoSummit.jpg",
      alt: "Mt. Apo Summit",
      title: "Mt. Apo, Davao Del Sur",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/ifugao.jpeg?updatedAt=1758704411632",
      alt: "Ifugao rice terraces",
      title: "Ifugao, Banaue",
    },
    {
      src: "https://ik.imagekit.io/ramparedes/Images/espada.png?updatedAt=1758617837383",
      alt: "Espadang Bato",
      title: "Espadang Bato, Rizal",
    },
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
        width={1000}
        height={1000}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-40"></div>
      {/* Title */}
      <p className="montserrat absolute bottom-4 left-4 text-white text-base md:text-lg font-bold opacity-0 transition-opacity duration-500 transform group-hover:opacity-100">
        {image.title}
      </p>
    </div>
  );

  return (
    <>
      <div className="min-h-screen relative bg-white p-2 flex flex-col items-center justify-center">
        {/* Gallery Header */}
        <div className="text-center mb-12 max-w-4xl px-4">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-6xl font-bold montserrat mb-4 text-black relative z-10">
              Favorite Trips
              <span className="block text-2xl md:text-3xl font-normal italic text-gray-600 mt-2">
                Memories Captured
              </span>
            </h1>
            {/* Decorative line */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></div>
          </div>
          <p className="text-gray-700 text-base md:text-lg font-medium mt-6 leading-relaxed">
            A collection of my favorite adventures and unforgettable moments. 
            Each image tells a story of breathtaking landscapes, challenging hikes, 
            and the pure joy of exploring the Philippines' most stunning destinations.
          </p>
          
          {/* Bottom decorative element */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-4 h-0.5 bg-black"></div>
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
        
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
        {/* <div className="py-10">
          <Button
            label="VIEW MORE IMAGES"
            onClick={() => router.push("/instagram")}
            bgColor="bg-black"
            textColor="text-white"
            showBraces
          />
        </div> */}
      </div>
      {isModalOpen && (
        <Modal image={selectedImage} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

export default MoodBoard;
