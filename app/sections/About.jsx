"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

// --- HELPER COMPONENT FOR CHARACTER ANIMATION ---
const AnimatedText = ({ text, className }) => {
  return (
    <p className={className}>
      {text.split("").map((char, index) => (
        <span key={index} className="animated-char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
};

// --- HELPER COMPONENT FOR MAGNETIC EFFECT ---
const Magnetic = ({ children }) => {
  const ref = React.useRef(null);

  React.useLayoutEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    const handleMouseMove = (e) => {
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

// --- REUSABLE COMPONENTS (FIXED) ---
// Removed opacity-0
const SectionTitle = ({ primary, secondary }) => (
  <div className="section-title text-center mb-16">
    <h1 className="poppins font-extrabold text-4xl sm:text-5xl uppercase tracking-widest text-black">
      {primary} <span className="text-gray-400">{secondary}</span>
    </h1>
  </div>
);

// Removed opacity-0
const InfoCard = ({ title, children, className }) => (
  <div className={`info-card w-full ${className}`}>
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
  const container = React.useRef(null);

  useGSAP(
    () => {
      // Animate Section Title
      gsap.from(".section-title", {
        scrollTrigger: { trigger: ".section-title", start: "bottom bottom" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Animate Intro Paragraph Characters
      gsap.from(".animated-char", {
        scrollTrigger: { trigger: ".intro-paragraph", start: "top 80%" },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.015,
      });

      // Animate Info Cards
      gsap.from(".info-card", {
        scrollTrigger: { trigger: ".info-grid", start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate Divider Line
      gsap.from(".divider", {
        scrollTrigger: { trigger: ".divider", start: "top 90%" },
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
      });

      // Animate Personal Info Items
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
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionTitle primary="ABOUT" secondary="ME" />

        <div className="intro-paragraph max-w-4xl mx-auto mb-24 text-center">
          <AnimatedText
            text="I'm a passionate Front-End Developer who specializes in turning ideas into beautiful, intuitive digital products. With a strong foundation in modern web technologies, I focus on crafting responsive, scalable, and high-performing interfaces that make a difference."
            className="poppins font-regular text-xl sm:text-2xl text-gray-800 leading-relaxed"
          />
        </div>

        <div className="info-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          <InfoCard title="Philosophy">
            <p>
              My development process is centered on clean design, precision, and
              a deep understanding of user experience. I believe in close
              collaboration and continuous learning to deliver products that are
              not only functional but also a pleasure to use.
            </p>
          </InfoCard>
          <InfoCard title="Expertise">
            <p>
              My expertise is turning design mockups into fully functional
              websites. I use modern AI tools to make this process much faster,
              allowing me to build and launch websites with greater speed and
              efficiency. This approach ensures that a designer's creative
              vision is brought to life on the web quickly,
            </p>
          </InfoCard>
          <InfoCard title="Tech Stacks">
            <ul className="flex flex-col gap-2">
              <li>
                <strong>React & Next.js</strong> for powerful UIs.
              </li>
              <li>
                <strong>TypeScript</strong> for scalable, type-safe code.
              </li>
              <li>
                <strong>Tailwind CSS</strong> for rapid, utility-first styling.
              </li>
              <li>
                <strong>State Management</strong> with Zustand & Redux.
              </li>
              <li>
                <strong>Github/Gitlab</strong> for seamless deployment & CI/CD.
              </li>
            </ul>
          </InfoCard>
        </div>

        <div className="divider max-w-4xl mx-auto border-t border-gray-200 my-24"></div>

        <div className="personal-info-grid flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-10 max-w-4xl mx-auto">
          <Magnetic>
            {/* Removed opacity-0 */}
            <div className="personal-info-item">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                BEYOND CODE
              </p>
              <p className="text-xl font-medium text-black mt-1">
                Contemporary Dancer
              </p>
            </div>
          </Magnetic>
          <Magnetic>
            {/* Removed opacity-0 */}
            <div className="personal-info-item">
              <p className="text-sm uppercase tracking-widest text-gray-400">
                HOBBY
              </p>
              <p className="text-xl font-medium text-black mt-1">
                Part-time Hiking Coordinator
              </p>
            </div>
          </Magnetic>
          <Magnetic>
            {/* Removed opacity-0 */}
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
