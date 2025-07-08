"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- ASSETS ---
import qube1 from "../assets/qube1.png";
import wtp2 from "../assets/wtp2.png";
import narwhal from "../assets/narwhal.png";
import aiqueweb from "../assets/aique.png";

// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(ScrollTrigger);

// --- PROJECT DATA (UNCHANGED) ---
const projects = [
  {
    src: qube1,
    title: "QUBE Smart Locker",
    description:
      "A web platform for a smart locker system, allowing users to manage and interact with their locker rentals.",
    link: "https://www.qubesmartlockers.com/",
  },
  {
    src: wtp2,
    title: "WalkThePlanet",
    description:
      "A travel-focused application encouraging users to explore new places on foot, tracking their journeys and discoveries.",
    link: "https://walktheplanet.com",
  },
  {
    src: narwhal,
    title: "Narwhal Pay",
    description:
      "A fintech solution providing streamlined payment processing services for businesses and individuals.",
    link: "http://paynarwhal.com/",
  },
  {
    src: aiqueweb,
    title: "Aique Innovation",
    description:
      "The corporate website for a tech innovation company, showcasing their services and portfolio.",
    link: "https://aiqueinnovation.com/",
  },
];

// Reusable component for the section title
const SectionTitle = ({ primary, secondary }) => (
  <div className="section-title text-center mb-6">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

// --- MAIN COMPONENT ---
const Highlights = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // --- SCROLL-TRIGGERED ANIMATIONS ---

      // Animate the main title and paragraph
      gsap.from([".section-title", ".intro-paragraph"], {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate the project cards in one by one
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
      });

      // --- 3D TILT INTERACTION ---
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        const image = card.querySelector("img");

        card.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = card.getBoundingClientRect();
          const x = e.clientX - left;
          const y = e.clientY - top;
          const rotateX = gsap.utils.mapRange(0, height, -15, 15, y);
          const rotateY = gsap.utils.mapRange(0, width, 15, -15, x);

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            scale: 1.05,
            duration: 0.7,
            ease: "power1.out",
          });

          // Parallax effect on the image
          gsap.to(image, {
            x: -rotateY * 0.5,
            y: rotateX * 0.5,
            duration: 1,
            ease: "power1.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.3)",
          });
          // Reset image parallax
          gsap.to(image, { x: 0, y: 0, duration: 1, ease: "power1.out" });
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="portfolio"
      ref={container}
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle primary="PORTFOLIO" secondary="HIGHLIGHTS" />
        <p className="intro-paragraph poppins text-center text-lg text-gray-600 max-w-2xl mx-auto mb-20">
          A curated collection of projects I've built, showcasing my passion for
          creating intuitive digital experiences.
        </p>

        {/* Added perspective and transform-style for 3D effect */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 perspective-[1000px]">
          {projects.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              // Added project-card class and transform-style
              className="project-card block transform-style-3d"
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="w-full object-cover rounded-lg aspect-video border border-gray-100"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold poppins text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center mt-4 text-sm font-medium text-black">
                  <span>View Project</span>
                  <ArrowUpRight
                    size={18}
                    className="ml-1 transition-transform duration-200 ease-in-out"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
