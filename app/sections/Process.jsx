"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(ScrollTrigger);

// Reusable component for the section title (no changes)
const SectionTitle = ({ primary, secondary }) => (
  <div className="section-title text-center mb-6">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

// Array containing the condensed process steps (no changes)
const processSteps = [
  {
    step: "01",
    title: "Deconstruct Designs",
    description:
      "I break down complex UI/UX designs into a structured, component-based architecture in collaboration with the team.",
  },
  {
    step: "02",
    title: "Core Development",
    description:
      "I build responsive, type-safe interfaces using React & TypeScript while managing client-side state.",
  },
  {
    step: "03",
    title: "API Integration",
    description:
      "I connect the frontend to backend services by integrating RESTful APIs to handle dynamic, real-time data.",
  },
  {
    step: "04",
    title: "Optimization & QA",
    description:
      "I ensure cross-browser compatibility and focus on performance optimization to deliver a smooth user experience.",
  },
  {
    step: "05",
    title: "Agile Collaboration",
    description:
      "I work within Scrum sprints, collaborating with a cross-functional team to deliver timely and iterative results.",
  },
  {
    step: "06",
    title: "Streamlined Delivery",
    description:
      "I contribute to projects utilizing CI/CD pipelines, enabling an efficient and flexible deployment workflow.",
  },
];

const Process = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // --- INTRO ANIMATION ---
      // Animate the main title and paragraph
      gsap.from([".section-title", ".intro-paragraph"], {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // --- INTERACTIVE HIGHLIGHT ANIMATION ---
      const steps = gsap.utils.toArray(".process-step");
      steps.forEach((step) => {
        // Create a trigger for each individual step
        ScrollTrigger.create({
          trigger: step,
          start: "top center", // When the top of the step hits the center of the screen
          end: "bottom center", // When the bottom of the step leaves the center
          // Toggles a class on the element when it's active
          toggleClass: { targets: step, className: "is-active" },
          // for debugging:
          // markers: true,
        });
      });
    },
    { scope: container }
  );

  return (
    <section
      id="process"
      ref={container}
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="section-title">
          <SectionTitle primary="MY WORK" secondary="PROCESS" />
        </div>
        <p className="intro-paragraph poppins text-center text-lg text-gray-600 max-w-3xl mx-auto mb-20">
          My approach is structured and collaborative, ensuring the final
          product is a high-quality, performant, and maintainable application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {processSteps.map((item) => (
            // Added "process-step" class for targeting
            <div key={item.step} className="process-step flex gap-6">
              {/* Added a transition for smooth color change */}
              <div className="poppins font-black text-6xl text-gray-100 transition-colors duration-300">
                {item.step}
              </div>
              <div className="flex-1">
                {/* Added a transition for smooth color change */}
                <h3 className="text-xl font-bold poppins mb-2 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-step .poppins.font-black,
        .process-step .poppins.font-bold {
          transition: color 0.4s ease-in-out;
        }

        .process-step.is-active .poppins.font-black {
          color: #000000; /* Change number to black when active */
        }

        .process-step.is-active .poppins.font-bold {
          color: #3b82f6; /* Example: Change title to blue when active */
        }
      `}</style>
    </section>
  );
};

export default Process;
