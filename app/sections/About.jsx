"use client";
import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- HELPER & REUSABLE COMPONENTS ---
const AnimatedText = ({ text, className }) => (
  <p className={className}>
    {text.split("").map((char, index) => (
      <span key={index} className="animated-char text-start">
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </p>
);

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.3);
      yTo(y * 0.3);
    };
    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("mousemove", handleMouseMove);
      currentRef.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (currentRef) {
        currentRef.removeEventListener("mousemove", handleMouseMove);
        currentRef.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return React.cloneElement(children, { ref });
};

const SectionTitle = ({ primary, secondary }) => (
  <div className="section-title text-center mb-16">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

const InfoCard = ({ title, children }) => (
  <div className="info-card w-full">
    <h2 className="poppins font-bold text-lg uppercase tracking-widest text-gray-400 mb-4">
      {title}
    </h2>
    <div className="poppins font-regular text-gray-800 text-lg leading-relaxed">
      {children}
    </div>
  </div>
);

// --- MAIN ABOUT COMPONENT ---
const About = () => {
  const container = useRef(null);
  useGSAP(
    () => {
      gsap.from(".section-title", {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".animated-char", {
        scrollTrigger: { trigger: ".intro-paragraph", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.015,
      });
      gsap.from(".info-card", {
        scrollTrigger: { trigger: ".info-grid", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
      gsap.from(".divider", {
        scrollTrigger: { trigger: ".divider", start: "top 90%" },
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });
      gsap.from(".personal-info-item", {
        scrollTrigger: { trigger: ".personal-info-grid", start: "top 90%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });
    },
    { scope: container }
  );

  return (
    <section
      id="about"
      ref={container}
      className="bg-white text-black py-12 sm:py-24 px-4 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle primary="ABOUT" secondary="ME" />
        <div className="intro-paragraph max-w-4xl mx-auto mb-24 text-center">
          <p className="poppins font-regular text-lg leading-relaxed">
            I'm a passionate Front-End Developer who specializes in turning
            ideas into beautiful, intuitive digital products. With a strong
            foundation in modern web technologies, I focus on crafting
            responsive, scalable, and high-performing interfaces that make a
            difference.
          </p>
        </div>

        <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div className="flex flex-col gap-16">
            <InfoCard title="Philosophy">
              <p>
                My development process is centered on clean design, precision,
                and a deep understanding of user experience. I believe in close
                collaboration and continuous learning to deliver products that
                are not only functional but also a pleasure to use.
              </p>
            </InfoCard>
          </div>
          <InfoCard title="Expertise">
            <p>
              My expertise is turning design mockups into fully functional
              websites. I use modern AI tools to make this process much faster,
              allowing me to build and launch websites with greater speed and
              efficiency. This approach ensures that a designer's creative
              vision is brought to life on the web quickly.
            </p>
          </InfoCard>
        </div>

        <div className="divider max-w-4xl mx-auto border-t border-gray-200 my-24"></div>
        <div className="personal-info-grid flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 max-w-4xl mx-auto">
          <Magnetic>
            <div className="personal-info-item">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                BEYOND CODE
              </p>
              <p className="text-xl font-medium text-black mt-1">
                Contemporary Dancer, Drone Pilot, Cinematographer
              </p>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="personal-info-item">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                HOBBY
              </p>
              <p className="text-xl font-medium text-black mt-1">
                Hiking & Travel Coordinator
              </p>
            </div>
          </Magnetic>
          <Magnetic>
            <div className="personal-info-item">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                DRIVE
              </p>
              <p className="text-xl font-medium text-black mt-1">
                Staying active & exploring nature
              </p>
            </div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default About;
