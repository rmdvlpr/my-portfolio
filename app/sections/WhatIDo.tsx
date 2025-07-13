"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Server,
  Smartphone,
  LayoutTemplate,
  Bot,
  Users,
  Library,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- SKILLS DATA (Unchanged) ---
const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code size={24} className="text-black" />,
    skills: [
      "React js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "GSAP",
    ],
  },
  {
    title: "UI Libraries",
    icon: <Library size={24} className="text-black" />,
    skills: ["Shadcn UI", "React Bits", "Hero UI", "Material UI", "Lucide"],
  },
  {
    title: "State Management",
    icon: <Server size={24} className="text-black" />,
    skills: ["Redux", "Zustand"],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} className="text-black" />,
    skills: ["React Native"],
  },
  {
    title: "Platform Development",
    icon: <LayoutTemplate size={24} className="text-black" />,
    skills: ["Shopify", "Wix", "Framer"],
  },
  {
    title: "Design & Prototyping",
    icon: <Bot size={24} className="text-black" />,
    skills: ["Figma"],
  },
  {
    title: "Methodologies",
    icon: <Users size={24} className="text-black" />,
    skills: ["Agile", "Scrum", "Kanban"],
  },
];

// --- MAIN COMPONENT ---
const WhatIDo = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animate the main title and paragraph
      gsap.from([".services-title", ".services-intro"], {
        scrollTrigger: { trigger: ".services-title", start: "top 80%" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate each skill row
      gsap.from(".skill-row", {
        scrollTrigger: {
          trigger: ".skills-list",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
      });
    },
    { scope: container }
  );

  return (
    // Switched to bg-white to match the site's theme
    <section
      id="what-i-do"
      ref={container}
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="services-title text-center mb-6">
          <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
            WHAT I <span className="text-gray-400">USE</span>
          </h1>
        </div>
        <p className="services-intro poppins text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          I specialize in a variety of technologies and platforms, allowing me
          to tackle diverse challenges and deliver comprehensive solutions from
          front to back.
        </p>

        {/* --- NEW SKILLS LIST LAYOUT --- */}
        <div className="skills-list border-b border-gray-200">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="skill-row grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-8 border-t border-gray-200"
            >
              {/* Category Title (1st column) */}
              <div className="flex items-center gap-4">
                {category.icon}
                <h3 className="text-xl font-bold poppins">{category.title}</h3>
              </div>

              {/* Skills List (spans next 2 columns) */}
              <div className="md:col-span-2 flex flex-wrap gap-x-6 gap-y-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-lg text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
