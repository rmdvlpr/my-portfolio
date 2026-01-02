"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CampfireMoments = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".campfire-title", {
        y: 50,
        opacity: 0,
        duration: 1.2,
      })
        .from(
          ".campfire-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        )
        .from(
          ".campfire-card",
          {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=0.6"
        );

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        animation: tl,
      });
    },
    { scope: container, revertOnUpdate: true }
  );

  const campfireMoments = [
    {
      title: "Under the Stars",
      description: "Setting up camp as the sun disappears. The simplicity of a tent, sleeping bag, and the vast night sky above.",
      image: "https://ik.imagekit.io/ramparedes/Images/camp2-apo.jpeg?updatedAt=1767343611861",
      moment: "3AM wake-up calls for sunrise hikes",
      location: "Mt. Apo, Camp Reyes"
    },
    {
      title: "Simple Meals, Rich Memories",
      description: "Cooking simple dishes on a portable stove tastes better when you're surrounded by nature and good company.",
      image: "https://ik.imagekit.io/ramparedes/Images/camping-cst.jpeg",
      moment: "Sharing stories over steaming cups",
      location: "Camp Sitio Tangal"
    },
    {
      title: "Digital Detox",
      description: "No signal, no notifications. Just the sound of wind through trees and the crackling of a small campfire.",
      image: "https://ik.imagekit.io/ramparedes/Images/camping-detox.png",
      moment: "Complete disconnection from the digital world",
      location: "Palauig Zambales"
    }
  ];

  return (
    <div ref={container} className="min-h-screen bg-zinc-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="campfire-title instrument-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-black mb-6">
            Campfire Moments
          </h2>
          <p className="campfire-subtitle montserrat text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The quiet hours when the world slows down. Where simple pleasures become profound experiences, 
            and the analog world reminds me what truly matters.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {campfireMoments.map((moment, index) => (
            <div key={index} className="campfire-card group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium opacity-90">{moment.location}</p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="montserrat font-bold text-xl text-black mb-3">
                    {moment.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {moment.description}
                  </p>
                  
                  {/* Moment Highlight */}
                  <div className="border-l-4 border-black pl-4">
                    <p className="text-black font-medium text-sm italic">
                      "{moment.moment}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="instrument-serif text-2xl sm:text-3xl text-black italic leading-relaxed">
              "In the simplicity of camping, I find the complexity of peace."
            </p>
            <div className="w-16 h-0.5 bg-black mx-auto mt-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampfireMoments;