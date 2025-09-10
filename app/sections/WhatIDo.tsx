"use client";
import React, { useRef, useState } from "react";
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
  Database,
  Globe,
  TestTube,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- TECHNOLOGY ICONS ---
const getTechIcon = (techName: string) => {
  const iconMap: { [key: string]: string } = {
    "React js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    Bootstrap:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    GSAP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Express.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    "Node.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "API Integration":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "Shadcn UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "React Bits":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Hero UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Material UI":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    Lucide:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Redux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    Zustand:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Unit Testing":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "React Native":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Shopify:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
    Wix: "https://www.vectorlogo.zone/logos/wix/wix-icon.svg",
    Framer: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    Figma:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    Agile:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Scrum:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    Kanban:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
  };

  return (
    iconMap[techName] ||
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg"
  );
};

// --- RATING COMPONENT ---
const SkillRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 ml-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            star <= rating ? "bg-blue-500 shadow-sm" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

// --- SKILLS DATA WITH RATINGS ---
const skillsData = [
  {
    title: "Frontend Development",
    icon: <Code size={24} className="text-black" />,
    skills: [
      { name: "React js", rating: 5 },
      { name: "Next.js", rating: 5 },
      { name: "TypeScript", rating: 4 },
      { name: "Tailwind CSS", rating: 5 },
      { name: "Bootstrap", rating: 4 },
      { name: "GSAP", rating: 4 },
    ],
    description:
      "Building responsive and interactive user interfaces with modern frameworks and libraries.",
  },
  {
    title: "Backend Development",
    icon: <Server size={24} className="text-black" />,
    skills: [
      { name: "Express.js", rating: 4 },
      { name: "Node.js", rating: 4 },
      { name: "API Integration", rating: 5 },
    ],
    description:
      "Creating robust server-side applications and RESTful APIs for scalable web solutions.",
  },
  {
    title: "Database",
    icon: <Database size={24} className="text-black" />,
    skills: [
      { name: "MongoDB", rating: 4 },
      { name: "PostgreSQL", rating: 3 },
    ],
    description:
      "Designing and managing both NoSQL and relational databases for optimal data storage.",
  },
  {
    title: "UI Libraries",
    icon: <Library size={24} className="text-black" />,
    skills: [
      { name: "Shadcn UI", rating: 5 },
      { name: "React Bits", rating: 4 },
      { name: "Hero UI", rating: 4 },
      { name: "Material UI", rating: 4 },
      { name: "Lucide", rating: 5 },
    ],
    description:
      "Leveraging component libraries to build consistent and beautiful user interfaces.",
  },
  {
    title: "State Management",
    icon: <Globe size={24} className="text-black" />,
    skills: [
      { name: "Redux", rating: 4 },
      { name: "Zustand", rating: 4 },
    ],
    description:
      "Managing application state efficiently for complex React applications.",
  },
  {
    title: "Testing & Tools",
    icon: <TestTube size={24} className="text-black" />,
    skills: [
      { name: "Unit Testing", rating: 3 },
      { name: "Postman", rating: 5 },
    ],
    description:
      "Ensuring code quality and API reliability through comprehensive testing strategies.",
  },
  {
    title: "Mobile Development",
    icon: <Smartphone size={24} className="text-black" />,
    skills: [{ name: "React Native", rating: 4 }],
    description:
      "Building cross-platform mobile applications with native performance.",
  },
  {
    title: "Platform Development",
    icon: <LayoutTemplate size={24} className="text-black" />,
    skills: [
      { name: "Shopify", rating: 4 },
      { name: "Wix", rating: 3 },
      { name: "Framer", rating: 4 },
    ],
    description:
      "Creating custom solutions and themes for popular web platforms.",
  },
  {
    title: "Design & Prototyping",
    icon: <Bot size={24} className="text-black" />,
    skills: [{ name: "Figma", rating: 4 }],
    description:
      "Designing user interfaces and creating interactive prototypes for better user experience.",
  },
  {
    title: "Methodologies",
    icon: <Users size={24} className="text-black" />,
    skills: [
      { name: "Agile", rating: 4 },
      { name: "Scrum", rating: 4 },
      { name: "Kanban", rating: 4 },
    ],
    description:
      "Following industry-standard project management methodologies for efficient team collaboration.",
  },
];

// --- MAIN COMPONENT ---
const WhatIDo = () => {
  const container = useRef(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  );

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

      // Animate skill tags on hover
      gsap.set(".skill-tag", {
        scale: 1,
      });
    },
    { scope: container }
  );

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };

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

        {/* --- INTERACTIVE SKILLS LIST LAYOUT --- */}
        <div className="skills-list border-b border-gray-200">
          {skillsData.map((category) => {
            const isExpanded = expandedCategories.has(category.title);

            return (
              <div
                key={category.title}
                className="skill-row border-t border-gray-200 transition-all duration-300"
              >
                {/* Clickable Category Header */}
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 py-8 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleCategory(category.title)}
                >
                  {/* Category Title (1st column) */}
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h3 className="text-xl font-bold poppins">
                      {category.title}
                    </h3>
                    <div className="ml-auto md:hidden">
                      {isExpanded ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </div>
                  </div>

                  {/* Skills List (spans next 2 columns) */}
                  <div className="md:col-span-2 flex flex-wrap gap-x-4 gap-y-3">
                    {category.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="skill-tag flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-200 hover:scale-105 transition-all duration-200 cursor-pointer"
                        style={{
                          animationDelay: `${index * 0.1}s`,
                        }}
                        onMouseEnter={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1.05,
                            duration: 0.2,
                            ease: "power2.out",
                          });
                        }}
                        onMouseLeave={(e) => {
                          gsap.to(e.currentTarget, {
                            scale: 1,
                            duration: 0.2,
                            ease: "power2.out",
                          });
                        }}
                      >
                        <img
                          src={getTechIcon(skill.name)}
                          alt={skill.name}
                          className="w-4 h-4 object-contain"
                          onError={(e) => {
                            // Fallback to a generic icon if the image fails to load
                            e.currentTarget.src =
                              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                          }}
                        />
                        <span>{skill.name}</span>
                      </div>
                    ))}
                    <div className="hidden md:flex items-center ml-auto">
                      {isExpanded ? (
                        <ChevronUp size={20} className="text-gray-500" />
                      ) : (
                        <ChevronDown size={20} className="text-gray-500" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Description */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-6 px-4 md:px-0">
                    <div className="bg-gray-50 p-6 rounded-lg space-y-4">
                      <p className="text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Detailed Skills Breakdown */}
                      <div className="border-t border-gray-200 pt-4">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Skill Proficiency Breakdown:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {category.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="flex items-center justify-between bg-white p-3 rounded-md"
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src={getTechIcon(skill.name)}
                                  alt={skill.name}
                                  className="w-4 h-4 object-contain"
                                  onError={(e) => {
                                    e.currentTarget.src =
                                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                                  }}
                                />
                                <span className="text-sm font-medium text-gray-700">
                                  {skill.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <SkillRating rating={skill.rating} />
                                <span className="text-xs text-gray-500 min-w-[60px]">
                                  {skill.rating === 5 && "Expert"}
                                  {skill.rating === 4 && "Advanced"}
                                  {skill.rating === 3 && "Intermediate"}
                                  {skill.rating === 2 && "Beginner"}
                                  {skill.rating === 1 && "Learning"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
