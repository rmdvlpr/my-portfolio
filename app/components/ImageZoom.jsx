"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, X } from "lucide-react";

export default function ImageZoom({ 
  src, 
  alt, 
  title, 
  description, 
  width = 600, 
  height = 400, 
  className = "",
  containerClassName = "",
  imageContainerClassName = "",
  objectFit = "cover",
  objectPosition = "top"
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getObjectFitClass = () => {
    switch(objectFit) {
      case 'contain': return 'object-contain';
      case 'cover': return 'object-cover';
      case 'fill': return 'object-fill';
      case 'none': return 'object-none';
      case 'scale-down': return 'object-scale-down';
      default: return 'object-cover';
    }
  };

  const getObjectPositionClass = () => {
    switch(objectPosition) {
      case 'top': return 'object-top';
      case 'bottom': return 'object-bottom';
      case 'center': return 'object-center';
      case 'left': return 'object-left';
      case 'right': return 'object-right';
      default: return 'object-top';
    }
  };

  return (
    <>
      {/* Clickable Image Container */}
      <div 
        className={`relative rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer hover:shadow-3xl transition-shadow duration-300 ${containerClassName}`}
        onClick={openModal}
      >
        <div className={`overflow-hidden ${imageContainerClassName}`}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full ${getObjectFitClass()} ${getObjectPositionClass()} hover:scale-105 transition-transform duration-300 ${className}`}
          />
        </div>
        
        {/* Overlay with title and description */}
        {(title || description) && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {title && <h3 className="text-white text-lg font-semibold mb-1">{title}</h3>}
            {description && <p className="text-gray-200 text-sm">{description}</p>}
          </div>
        )}
        
        {/* Zoom icon */}
        <div className="absolute top-4 right-4 bg-black/50 rounded-full p-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={16} className="text-white" />
        </div>
      </div>

      {/* Full-Screen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors duration-200"
            >
              <X size={24} className="text-white" />
            </button>
            
            <div className="relative max-w-full max-h-full">
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Modal overlay with title and description */}
              {(title || description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  {title && <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>}
                  {description && <p className="text-gray-200 text-lg">{description}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}