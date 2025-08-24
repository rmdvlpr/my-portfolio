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

      // --- SLIDING REVEAL INTERACTION ---
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        const overlay = card.querySelector(".project-overlay");
        const image = card.querySelector("img");
        const content = card.querySelector(".project-content");
        const title = card.querySelector(".project-title");
        const description = card.querySelector(".project-description");
        const link = card.querySelector(".project-link");

        // Set initial states
        gsap.set(overlay, { scaleX: 0, transformOrigin: "left center" });
        gsap.set([title, description, link], { y: 30, opacity: 0 });

        card.addEventListener("mouseenter", () => {
          const tl = gsap.timeline();

          // Image zoom and darken
          tl.to(image, {
            scale: 1.1,
            filter: "brightness(0.4)",
            duration: 0.6,
            ease: "power2.out",
          })
            // Overlay slide in
            .to(
              overlay,
              {
                scaleX: 1,
                duration: 0.5,
                ease: "power2.out",
              },
              0.1
            )
            // Content animate in with stagger
            .to(
              [title, description, link],
              {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
                stagger: 0.1,
              },
              0.3
            );
        });

        card.addEventListener("mouseleave", () => {
          const tl = gsap.timeline();

          // Content animate out
          tl.to([title, description, link], {
            y: 30,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            stagger: 0.05,
          })
            // Overlay slide out
            .to(
              overlay,
              {
                scaleX: 0,
                transformOrigin: "right center",
                duration: 0.4,
                ease: "power2.in",
              },
              0.1
            )
            // Image reset
            .to(
              image,
              {
                scale: 1,
                filter: "brightness(1)",
                duration: 0.5,
                ease: "power2.out",
              },
              0.2
            );
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

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {projects.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="w-full object-cover rounded-xl aspect-video transition-all duration-500"
                />

                {/* Sliding Overlay */}
                <div className="project-overlay absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent rounded-xl flex items-center justify-center">
                  <div className="project-content text-center text-white px-8">
                    <h3 className="project-title text-3xl font-bold poppins mb-4">
                      {item.title}
                    </h3>
                    <p className="project-description text-lg leading-relaxed mb-6 max-w-sm">
                      {item.description}
                    </p>
                    <div className="project-link inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 hover:bg-white/30 transition-colors">
                      <span>View Project</span>
                      <ArrowUpRight size={18} className="ml-2" />
                    </div>
                  </div>
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
