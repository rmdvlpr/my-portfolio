"use client";
import React, { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility function to calculate experience duration
const calculateExperience = (startDate, endDate = new Date()) => {
  const start = new Date(startDate);
  const end = endDate === "Present" ? new Date() : new Date(endDate);
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  const totalMonths = years * 12 + months;
  const experienceYears = Math.floor(totalMonths / 12);
  const experienceMonths = totalMonths % 12;
  
  if (experienceYears === 0) {
    return `${experienceMonths} Month${experienceMonths !== 1 ? 's' : ''}`;
  } else if (experienceMonths === 0) {
    return `${experienceYears} Year${experienceYears !== 1 ? 's' : ''}`;
  } else {
    return `${experienceYears} Year${experienceYears !== 1 ? 's' : ''} ${experienceMonths} Month${experienceMonths !== 1 ? 's' : ''}`;
  }
};

const SectionTitle = ({ primary, secondary }) => (
  <div className="section-title text-center mb-16">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

const ExperienceCard = ({ role, company, period, responsibilities, isLatest }) => (
  <div className="experience-card group relative">
    <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
      {/* Timeline Indicator */}
      <div className="flex-shrink-0 flex items-start gap-4">
        <div className="flex flex-col items-center">
          <div className={`w-4 h-4 rounded-full ${isLatest ? 'bg-black' : 'bg-gray-400'} transition-all duration-300 group-hover:scale-125`}></div>
          <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
        </div>
        <div className="md:w-48">
          <p className="poppins text-sm uppercase tracking-widest text-gray-400 font-medium">
            {period}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <h3 className="poppins font-bold text-2xl text-black mb-1 transition-colors duration-300 group-hover:text-gray-600">
          {role}
        </h3>
        <p className="poppins text-lg text-gray-500 mb-6">{company}</p>
        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-3 responsibility-item">
              <span className="text-gray-400 mt-1.5 flex-shrink-0">•</span>
              <span className="poppins text-base text-gray-700 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const container = useRef(null);

  const experiences = [
    {
      role: "Front-End Developer",
      company: "QUBE Smart Technology Corporation",
      period: "January 2025 – Present",
      startDate: "2025-01-01",
      endDate: "Present",
      isLatest: true,
      responsibilities: [
        "Contributing to the main locker system, CMS, and overall performance improvements for the SmartLocker ecosystem.",
        "Developed responsive landing pages and product marketing pages using Next.js, Tailwind CSS, Zustand, and REST APIs.",
        "Built reusable UI components for the touch-screen locker interface, focusing on smooth UX for physical device interaction.",
        "Integrated APIs to manage locker statuses, access control, and user dashboards.",
        "Contributed to building CMS modules for content and locker configuration management.",
        "Ensured compliance with industry standards through coordinated testing and validation.",
      ],
    },
    {
      role: "Front-End Developer",
      company: "AIQUE Innovation Technology (WalkThePlanet)",
      period: "May 2023 – January 2025",
      startDate: "2023-05-01",
      endDate: "2025-01-01",
      isLatest: false,
      responsibilities: [
        "Delivered new features in a fast-paced Agile/Scrum environment, collaborating closely with Full-Stack Engineers, QAs, and Business Analysts.",
        "Built and optimized major modules for a large-scale B2B & B2C Travel Booking Engine using TypeScript, ensuring high performance and maintainable architecture.",
        "Translated complex UI/UX mockups into pixel-perfect, responsive interfaces across desktop and mobile.",
        "Integrated multiple RESTful APIs to manage dynamic data for flights, hotels, and tour booking flows.",
        "Implemented advanced state management using Zustand and Redux, prioritizing simplicity and scalability.",
        "Contributed to CI/CD workflows to streamline deployments and improve development efficiency.",
        "Ensured cross-browser compatibility and optimized performance for high-traffic pages.",
      ],
    },
  ];

  // Calculate total experience dynamically
  const totalExperience = useMemo(() => {
    const startDate = new Date("2023-05-01"); // First job start date
    return calculateExperience(startDate);
  }, []);

  useGSAP(
    () => {
      gsap.from(".section-title", {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".experience-card", {
        scrollTrigger: { trigger: ".experience-timeline", start: "top 80%" },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });

      gsap.from(".responsibility-item", {
        scrollTrigger: { trigger: ".experience-timeline", start: "top 70%" },
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
      });

      gsap.from(".summary-card", {
        scrollTrigger: { trigger: ".summary-section", start: "top 85%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      id="experience"
      ref={container}
      className="bg-white text-black py-12 sm:py-24 px-4 lg:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <SectionTitle primary="PROFESSIONAL" secondary="EXPERIENCE" />

        {/* Summary Card */}
        <div className="summary-section mb-20">
          <div className="summary-card max-w-3xl mx-auto text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="poppins text-sm uppercase tracking-widest text-gray-400 mb-2">
              Total Experience
            </p>
            <p className="poppins font-bold text-4xl text-black mb-2">
              {totalExperience}
            </p>
            <p className="poppins text-base text-gray-600">
              May 2023 – Present
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
