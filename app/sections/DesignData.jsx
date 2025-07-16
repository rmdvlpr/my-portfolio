"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdAnimation } from "react-icons/md";

import {
  Palette,
  TerminalSquare,
  Library,
  Figma,
  Code,
  GitBranch,
  Wind,
  Sparkles,
  Triangle,
} from "lucide-react";
import NextJsIcon from "../components/NextJsIcon";
import { BsBehance } from "react-icons/bs";

// GSAP PLUGIN REGISTRATION
gsap.registerPlugin(ScrollTrigger);

// DATA (Unchanged)
const designData = {
  title: "Design & Palette",
  icon: <Palette size={24} />,
  tools: [
    {
      name: "Figma",
      description: "For initial mockups and wireframes.",
      icon: <Figma size={20} />,
    },
    {
      name: "Behance",
      description: "For design concepts and ideas.",
      icon: <BsBehance size={20} />,
    },
    {
      name: "ToolFolio",
      description: "For tools and resources",
      icon: <Wind size={20} />,
    },
  ],

  palette: [
    {
      name: "Background",
      hex: "#FFFFFF",
      usage: "Primary background for all sections.",
    },
    {
      name: "Primary Text",
      hex: "#000000",
      usage: "Headings and primary content.",
    },
    {
      name: "Secondary Text",
      hex: "#6B7280",
      usage: "Body copy and descriptions.",
    },
    {
      name: "Subtle Text",
      hex: "#BFBFBF",
      usage: "Secondary headings and labels.",
    },
    {
      name: "Border / Divider",
      hex: "#F3F4F6",
      usage: "Separators and subtle lines.",
    },
    {
      name: "Interactive Accent",
      hex: "#3B82F6",
      usage: "Highlighting active elements.",
    },
  ],
};
const toolsData = {
  title: "Development Tools",
  icon: <TerminalSquare size={24} />,
  items: [
    {
      name: "VS Code",
      description: "My primary code editor.",
      icon: <Code size={20} />,
    },
    {
      name: "Next.js",
      description: "The React framework for production.",
      icon: <NextJsIcon />,
    },
    {
      name: "Tailwind CSS",
      description: "For rapid, utility-first styling.",
      icon: <Wind size={20} />,
    },
    {
      name: "GitHub",
      description: "For version control.",
      icon: <GitBranch size={20} />,
    },
    {
      name: "Vercel",
      description: "For deployment and hosting.",
      icon: <Triangle size={20} />,
    },
  ],
};
const librariesData = {
  title: "Libraries & Animation",
  icon: <Library size={24} />,
  items: [
    {
      name: "GSAP",
      description: "The engine for all animations.",
      icon: <Sparkles size={20} />,
    },
    {
      name: "Lenis",
      description: "For Buttery Smooth Scrolling.",
      icon: <MdAnimation size={20} />,
    },
    {
      name: "Lucide React",
      description: "For clean and consistent iconography.",
      icon: <Palette size={20} />,
    },
  ],
};

// A small, reusable component for the individual palette items
const PaletteItem = ({ color }) => (
  <div className="palette-item">
    <div className="flex items-center gap-4">
      <div
        className="w-8 h-8 rounded-lg border border-gray-200 shadow-sm flex-shrink-0"
        style={{ backgroundColor: color.hex }}
      ></div>
      <div>
        <p className="font-bold text-black">{color.name}</p>
        <p className="text-xs text-gray-500 font-mono uppercase">{color.hex}</p>
      </div>
    </div>
    <p className="text-sm text-gray-500 mt-2 pl-12">{color.usage}</p>
  </div>
);

// MAIN COMPONENT
const Colophon = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Animation logic remains the same and will work with the new layout
      const tl = gsap.timeline({
        scrollTrigger: { trigger: container.current, start: "top 80%" },
      });
      tl.from(".colophon-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          ".category-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
          },
          "-=0.6"
        )
        .from(
          ".tech-item, .design-tool-item, .palette-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.05,
          },
          "-=0.8"
        );
    },
    { scope: container }
  );

  return (
    <section
      id="colophon"
      ref={container}
      className="bg-white text-black pt-24 pb-12 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="colophon-title text-center mb-16">
          <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
            SITE <span className="text-gray-400">CREDITS</span>
          </h1>
          <p className="poppins text-lg text-gray-600 mt-4">
            A look under the hood at the tools and technologies used to build
            this portfolio.
          </p>
        </div>

        {/* NEW Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Design & Palette (Spans 2 Rows) */}
          <div className="category-card lg:row-span-2 rounded-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              {designData.icon}
              <h3 className="text-2xl font-bold poppins">{designData.title}</h3>
            </div>
            <div className="space-y-4">
              {/* Updated to map over multiple design tools */}
              {designData.tools.map((item, index) => (
                <div
                  key={index}
                  className="design-tool-item flex items-center gap-4 p-3 rounded-md"
                >
                  <div className="text-gray-600">{item.icon}</div>
                  <div>
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-100 pt-4 mt-4 space-y-3">
                {designData.palette.map((color) => (
                  <PaletteItem key={color.hex} color={color} />
                ))}
              </div>
            </div>
          </div>

          {/* Column 2, Row 1: Development Tools */}
          <div className="category-card rounded-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              {toolsData.icon}
              <h3 className="text-2xl font-bold poppins">{toolsData.title}</h3>
            </div>
            <div className="space-y-4">
              {toolsData.items.map((item, index) => (
                <div
                  key={index}
                  className="tech-item flex items-center gap-4 p-3 rounded-md"
                >
                  <div className="text-gray-600">{item.icon}</div>
                  <div>
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2, Row 2: Libraries & Animation */}
          <div className="category-card rounded-lg p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              {librariesData.icon}
              <h3 className="text-2xl font-bold poppins">
                {librariesData.title}
              </h3>
            </div>
            <div className="space-y-4">
              {librariesData.items.map((item, index) => (
                <div
                  key={index}
                  className="tech-item flex items-center gap-4 p-3 rounded-md"
                >
                  <div className="text-gray-600">{item.icon}</div>
                  <div>
                    <p className="font-bold text-black">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Colophon;
