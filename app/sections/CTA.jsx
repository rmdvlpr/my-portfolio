"use client";
import React, { useRef, useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github, FileText, Phone, Gitlab } from "lucide-react";

// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(ScrollTrigger);

// --- HELPER COMPONENT FOR MAGNETIC EFFECT ---
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
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.4); // Multiplier controls "stickiness"
      yTo(y * 0.4);
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

// --- REUSABLE COMPONENTS (UNCHANGED) ---
const SectionTitle = ({ children }) => (
  <h1 className="poppins font-extrabold text-4xl sm:text-5xl text-center text-black tracking-wide">
    {children}
  </h1>
);

const ContactLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-300 group"
  >
    {icon}
    <span className="group-hover:underline underline-offset-4">{label}</span>
  </a>
);

// --- MAIN CTA COMPONENT ---
const CTA = () => {
  const container = useRef(null);
  const currentYear = new Date().getFullYear();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Start animation when 80% of the section is visible
        },
      });

      tl.from(".divider", { scaleX: 0, duration: 1, ease: "power3.inOut" })
        .from(
          ".section-title-cta",
          { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".intro-paragraph-cta",
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".email-link",
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".contact-link-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          ".page-footer",
          { opacity: 0, duration: 1, ease: "power3.out" },
          "-=0.2"
        );
    },
    { scope: container }
  );

  return (
    <section
      id="contact"
      ref={container}
      className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="divider w-24 h-px bg-gray-200 mx-auto mb-20"></div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="section-title-cta">
            <SectionTitle>Let's Build Together</SectionTitle>
          </div>

          <p className="intro-paragraph-cta poppins text-lg text-gray-600 mt-6 leading-relaxed">
            I'm currently seeking new opportunities as a Front-End Developer. If
            you have a project in mind, an open position, or simply want to
            connect, I would love to hear from you.
          </p>

          <a
            href="mailto:ramparedes06@gmail.com"
            className="email-link poppins font-bold text-2xl sm:text-3xl text-black inline-block mt-10 hover:text-gray-700 transition-colors duration-300"
          >
            ramparedes06@gmail.com
          </a>

          <div className="flex justify-center items-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-6 mt-16">
            <div className="contact-link-item">
              <Magnetic>
                <ContactLink
                  href="https://www.linkedin.com/in/ram-paredes/"
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                />
              </Magnetic>
            </div>
            <div className="contact-link-item">
              <Magnetic>
                <ContactLink
                  href="https://github.com/RamParedes06"
                  icon={<Github size={20} />}
                  label="GitHub"
                />
              </Magnetic>
            </div>
            <div className="contact-link-item">
              <Magnetic>
                <ContactLink
                  href="http://gitlab.aique.cloud/mardie"
                  icon={<Gitlab size={20} />}
                  label="GitLab"
                />
              </Magnetic>
            </div>
            <div className="contact-link-item">
              <Magnetic>
                <ContactLink
                  href="https://drive.google.com/file/d/18FUsf2rZ4DHf7J2H7cw8fJOL7gTmE-Ll/view?usp=sharing"
                  icon={<FileText size={20} />}
                  label="Resume"
                />
              </Magnetic>
            </div>
            <div className="contact-link-item">
              <Magnetic>
                <ContactLink
                  href="tel:+639454890745"
                  icon={<Phone size={20} />}
                  label="+63 945 489 0745"
                />
              </Magnetic>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer text-center text-gray-500 mt-24 pt-10 border-t border-gray-100">
        <p>&copy; {currentYear} Ram Paredes. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default CTA;
