"use client";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(Flip, ScrollTrigger);

// --- REFACTORED STORY DATA ---
const storyData = [
  {
    year: "2023",
    title: "First Step into Development",
    content:
      "This marked my first day as an intern at AIQUE Innovation Technology Corp. I joined with only basic knowledge of HTML, CSS, and JavaScript. My Senior Developer gave me the opportunity to learn React, and my first task was to create a replica of the Netflix website. I successfully built it—not perfect, but the best I could do at that stage.",
  },
  {
    year: "2023",
    title: "From Intern to Full-Time Developer",
    content:
      "This was my last day as an intern and my first day as a full-time Frontend Developer at WalkThePlanet, a client of AIQUE. I was absorbed into their team through the recommendation of my Senior Developer and other C-level executives, a testament to the growth and skills I acquired during my internship.",
  },
  {
    year: "2024",
    title: "Transition to Mobile Development",
    content:
      "A year into my frontend journey, having learned so much, I officially started working as a Mobile Developer using React Native for the GalaGo mobile app. This new chapter allowed me to apply my React knowledge to a new platform, expanding my skill set from web to mobile application development.",
  },
];

// --- MAIN STORY COMPONENT ---
const Story = () => {
  const container = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(
    () => {
      // Scroll-triggered entrance animation for the whole section
      gsap.from([".story-title", ".story-intro", ".story-item"], {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
    { scope: container }
  );

  // Handle the Flip animation when the active index changes
  useGSAP(
    () => {
      const items = gsap.utils.toArray(".story-item");
      if (!items.length) return;

      // Get the current state of the layout
      const state = Flip.getState(items);

      // Toggle the active class based on the activeIndex
      items.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add("is-active");
        } else {
          item.classList.remove("is-active");
        }
      });

      // Animate from the old state to the new state
      Flip.from(state, {
        duration: 0.5,
        ease: "power2.inOut",
        scale: true, // Use scaling for a smoother visual effect
      });
    },
    { dependencies: [activeIndex], scope: container }
  );

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      ref={container}
      id="story"
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-4xl mx-auto">
        <div className="story-title text-center mb-6">
          <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest">
            MY <span className="text-gray-400">STORY</span>
          </h1>
        </div>
        <p className="story-intro poppins text-center text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          A brief timeline of my journey into the world of software development,
          highlighting key milestones and transitions.
        </p>

        <div className="story-accordion border-b border-gray-200">
          {storyData.map((item, index) => (
            <div
              key={index}
              className="story-item border-t border-gray-200 py-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-lg font-semibold text-gray-400">
                    {item.year}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-black">
                    {item.title}
                  </h3>
                </div>
                <div className="story-icon">
                  {activeIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </div>
              </div>
              <div className="story-content overflow-hidden">
                <div className="pt-4 text-gray-600 text-lg leading-relaxed">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CSS STYLES FOR THE ACCORDION --- */}
      <style jsx>{`
        .story-content {
          max-height: 0;
          transition: max-height 0.5s ease-in-out;
        }
        .story-item.is-active .story-content {
          max-height: 500px; /* Adjust if content is longer */
        }
        .story-icon {
          transition: transform 0.3s ease-in-out;
        }
        .story-item.is-active .story-icon {
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Story;
