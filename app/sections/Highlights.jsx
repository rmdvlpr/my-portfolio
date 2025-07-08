import Image from "next/image";
import React from "react";
import { ArrowUpRight } from "lucide-react";

// --- ASSETS ---
// Make sure these paths are correct, assuming they are in `public/assets/`
import qube1 from "../assets/qube1.png";
import wtp2 from "../assets/wtp2.png";
import narwhal from "../assets/narwhal.png";
import aiqueweb from "../assets/aique.png";

// --- ENRICHED PROJECT DATA ---
const projects = [
  {
    src: qube1,
    title: "QUBE Smart Locker",
    description:
      "A web platform for a smart locker system, allowing users to manage and interact with their locker rentals.",
    tech: ["React", "Node.js", "Styled Components"],
    link: "https://qube-website.onrender.com/",
  },
  {
    src: wtp2,
    title: "WalkThePlanet",
    description:
      "A travel-focused application encouraging users to explore new places on foot, tracking their journeys and discoveries.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://walktheplanet.com",
  },
  {
    src: narwhal,
    title: "Narwhal Pay",
    description:
      "A fintech solution providing streamlined payment processing services for businesses and individuals.",
    tech: ["React", "Stripe API", "Material UI"],
    link: "http://paynarwhal.com/",
  },
  {
    src: aiqueweb,
    title: "Aique Innovation",
    description:
      "The corporate website for a tech innovation company, showcasing their services and portfolio.",
    tech: ["Next.js", "Framer Motion", "Sass"],
    link: "https://aiqueinnovation.com/",
  },
];

// Reusable component for the section title for consistency
const SectionTitle = ({ primary, secondary }) => (
  <div className="text-center mb-6">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

const Highlights = () => {
  return (
    <section
      id="portfolio"
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* === HEADING === */}
        <SectionTitle primary="PORTFOLIO" secondary="HIGHLIGHTS" />
        <p className="poppins text-center text-lg text-gray-600 max-w-2xl mx-auto mb-20">
          A curated collection of projects I've built, spanning different
          clients and industries, showcasing my passion for creating intuitive
          digital experiences.
        </p>

        {/* === PROJECTS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg">
                {/* Image with subtle hover effect */}
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1920}
                  height={1080}
                  className="w-full object-cover rounded-lg aspect-video border border-gray-100 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              {/* Text content below the image */}
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
                    className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ease-in-out"
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
