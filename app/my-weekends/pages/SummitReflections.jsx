"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SummitReflections = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".summit-hero", {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
      })
        .from(
          ".summit-reflection",
          {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
          },
          "-=1"
        )
        .from(
          ".summit-image",
          {
            x: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
          },
          "-=1.5"
        );

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        animation: tl,
      });
    },
    { scope: container, revertOnUpdate: true }
  );

  const summitReflections = [
     {
      mountain: "Mt. Apo",
      elevation: "2,954m",
      lesson: "Preparation Meets Opportunity",
      reflection: "Standing on the Philippines' highest peak reminded me that success is where preparation meets opportunity. The months of training, gear preparation, and route planning parallel how I approach complex coding projects.",
      image: "https://ik.imagekit.io/ramparedes/Images/ApoSummit.jpg?updatedAt=1765933631440",
      personalBreakthrough: "Understanding that the summit is just the beginning"
    },
    {
      mountain: "Mt. Pulag",
      elevation: "2,926m",
      lesson: "Persistence Over Perfection",
      reflection: "The trail taught me that progress isn't always linear. Just like debugging code, sometimes you need to take a step back to move forward. Every switchback on the mountain mirrors the iterative process of problem-solving in development.",
      image: "https://ik.imagekit.io/ramparedes/Images/pulag.JPG",
      personalBreakthrough: "Learning to embrace the struggle as part of the journey"
    },
   
    {
      mountain: "Mt. Kupapey",
      elevation: "1,647m",
      lesson: "Beauty in Precision",
      reflection: "Mayon's perfect cone shape taught me about the beauty of precision and attention to detail. Like clean, well-structured code, nature's most beautiful creations often follow elegant patterns and principles.",
      image: "https://ik.imagekit.io/ramparedes/Images/kupapey.jpg?updatedAt=1758617834090",
      personalBreakthrough: "Finding elegance in simplicity"
    }
  ];



  return (
    <div ref={container} className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="summit-hero text-center mb-20">
          <h2 className="instrument-serif text-5xl sm:text-6xl lg:text-8xl font-bold mb-8">
            Summit
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-gray-400 italic mt-2">
              Reflections
            </span>
          </h2>
          <p className="montserrat text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Every peak conquered represents more than elevation gained. These summits have become classrooms 
            where mountains teach lessons that shape both my code and my character.
          </p>
        </div>

        {/* Reflections */}
        <div className="space-y-16 sm:space-y-20">
          {summitReflections.map((summit, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-stretch`}>
              {/* Content Side */}
              <div className="summit-reflection flex-1 space-y-6 order-2 lg:order-none">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="montserrat text-2xl sm:text-3xl font-bold">{summit.mountain}</h3>
                    <p className="text-gray-400 text-sm">{summit.elevation} above sea level</p>
                  </div>
                </div>

                <div className="border-l-4 border-white pl-6">
                  <h4 className="montserrat text-xl font-semibold text-white mb-3">
                    {summit.lesson}
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {summit.reflection}
                  </p>
                  <div className="bg-gray-900 rounded-lg p-4 border-l-4 border-gray-600">
                    <p className="text-gray-400 text-sm font-medium">Personal Breakthrough:</p>
                    <p className="text-white italic">"{summit.personalBreakthrough}"</p>
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="summit-image flex-1 order-1 lg:order-none">
                <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden">
                  <Image
                    src={summit.image}
                    alt={summit.mountain}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white">
                    <p className="font-bold text-base sm:text-lg">{summit.mountain}</p>
                    <p className="text-xs sm:text-sm opacity-90">{summit.elevation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       
       

        {/* Philosophy Section */}
        <div className="mt-24 text-center">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-8 sm:p-12">
            <h3 className="instrument-serif text-3xl sm:text-4xl font-bold mb-6">
              The Developer's Mountain Philosophy
            </h3>
            <p className="montserrat text-gray-300 text-lg leading-relaxed mb-6">
              Mountains don't just test your physical limits—they debug your mental processes. 
              Each trail is like a complex algorithm: there are multiple paths to the solution, 
              some more efficient than others, but all requiring patience, planning, and persistence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h4 className="font-bold text-white mb-2">Code Parallels:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Debugging = Finding the right trail</li>
                  <li>• Refactoring = Taking a different route</li>
                  <li>• Testing = Checking your gear</li>
                  <li>• Deployment = Reaching the summit</li>
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-bold text-white mb-2">Life Lessons:</h4>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Progress over perfection</li>
                  <li>• Preparation prevents problems</li>
                  <li>• The journey matters more than the destination</li>
                  <li>• Every setback is a setup for a comeback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummitReflections;