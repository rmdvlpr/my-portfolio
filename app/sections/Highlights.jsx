"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { ArrowUpRight, Briefcase, User } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- ASSETS ---
import qube1 from "../assets/qube1.png";
import wtp2 from "../assets/wtp2.png";
import bundokista from "../assets/bundokista.png";
import blog from "../assets/Blog.png";


// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(ScrollTrigger);

// --- PROJECT DATA ---
const projects = [
  {
    src: qube1,
    title: "QUBE Smart Locker",
    description:
      "A web platform for a smart locker system, allowing users to manage and interact with their locker rentals.",
    link: "https://www.qubesmartlockers.com/",
    tags: ["Next.js", "Node.js",  "AWS r2", "Framer Motion", "GSAP", "Tailwind"],
    type: "Corporate"
  },
  {
    src: wtp2,
    title: "WalkThePlanet",
    description:
      "A travel-focused application encouraging users to explore new places on foot, tracking their journeys and discoveries.",
    link: "https://walktheplanet.com",
    tags: ["Next.js", "Node.js", "AWS r2", "Framer Motion", "GSAP", "Tailwind"],
    type: "Corporate"
  },
  {
    src: bundokista,
    title: "Bundokista Hiking And Travel ",
    description:
      "A travel-focused website for hiking and travel enthusiasts",
    link: "https://bundokista-frontend.onrender.com/",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js" , "Cloudinary", "JWT" , "Framer Motion", "GSAP", "Tailwind"],
    type: "Freelance"
  },
  {
    src: blog,
    title: "Words & Stories",
    description:
      "A whitelisted website for poetry and stories, allowing users to submit and share their work.",
    link: "https://rioramilo.onrender.com/",
    tags: ["Next.js", "Node.js", "MongoDB", "Express.js" , "Cloudinary", "JWT" , "Framer Motion", "GSAP", "Tailwind"],
    type: "Freelance"
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
      gsap.from([".section-title", ".intro-paragraph"], {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

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

      // --- HOVER INTERACTIONS ---
      const cards = gsap.utils.toArray(".project-card");
      cards.forEach((card) => {
        const image = card.querySelector("img");
        const overlay = card.querySelector(".project-overlay");
        const description = card.querySelector(".project-description");
        const tags = card.querySelector(".project-tags");
        const link = card.querySelector(".project-link");

        // Set initial states
        gsap.set(overlay, { opacity: 0 });
        gsap.set([description, tags, link], { y: 20, opacity: 0 });

        card.addEventListener("mouseenter", () => {
          const tl = gsap.timeline();
          
          tl.to(image, {
            scale: 1.05,
            filter: "brightness(0.5)",
            duration: 0.5,
            ease: "power2.out",
          })
          .to(overlay, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }, 0)
          .to([description, tags, link], {
            y: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.08,
          }, 0.2);
        });

        card.addEventListener("mouseleave", () => {
          const tl = gsap.timeline();
          
          tl.to([description, tags, link], {
            y: 20,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            stagger: 0.05,
          })
          .to(overlay, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          }, 0.1)
          .to(image, {
            scale: 1,
            filter: "brightness(1)",
            duration: 0.4,
            ease: "power2.out",
          }, 0.1);
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

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Type Indicator - Glassmorphism */}
                  <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium backdrop-blur-xl border shadow-lg ${
                    item.type === "Corporate" 
                      ? "bg-black/30 text-white border-white/20" 
                      : "bg-black/30 text-white border-white/20"
                  }`}>
                    {item.type === "Corporate" ? (
                      <Briefcase size={14} />
                    ) : (
                      <User size={14} />
                    )}
                    <span>{item.type}</span>
                  </div>

                  {/* Title Overlay - Bottom of Image */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-xl font-semibold poppins text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="project-overlay absolute inset-0 bg-black/75 flex items-center justify-center p-8">
                    <div className="text-center text-white max-w-md">
                      <p className="project-description text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                      
                      {/* Tags */}
                      <div className="project-tags flex flex-wrap gap-2 justify-center mb-6">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* View Project Link */}
                      <div className="project-link inline-flex items-center gap-2 text-sm font-medium">
                        <span>View Project</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Current Projects Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="poppins font-bold text-3xl sm:text-4xl uppercase tracking-wide text-black mb-4">
             Future Projects to Deploy
            </h2>
            <p className="text-gray-600 text-lg">
              Projects in my portfolio that are currently and soon to be under development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

             {/* Real Estate Property Website Project */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Real Estate Property Platform
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A comprehensive real estate platform with property listings, virtual tours, and agent management system.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-black rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-700 font-medium">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
            

            {/* Human Resource Management System Project */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                   Human Resource Management System
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A Customize Human Resource Management System for a company.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-700 font-medium">Soon to Develop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dental Booking Project */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="border-2 border-gray-300 rounded-lg p-3 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl text-gray-900 mb-2">
                    Dental Booking / Appointment
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A comprehensive booking system for dental clinic with appointment management and patient records.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-700 font-medium">Soon to Develop</span>
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
