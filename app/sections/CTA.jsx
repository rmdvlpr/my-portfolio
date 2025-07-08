"use client";
import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Github, FileText, Phone, Gitlab } from "lucide-react";
import Image from "next/image";
import github from "../assets/github-preview.png";
import linkedin from "../assets/linkedin-preview.png";
import gitlab from "../assets/gitlab-preview.png";
import resume from "../assets/resume-preview.png";
import phone from "../assets/phone-preview.png";

// --- GSAP PLUGIN REGISTRATION ---
gsap.registerPlugin(ScrollTrigger);

// --- DATA WITH NEW PREVIEW IMAGE PATHS ---
const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ram-paredes/",
    icon: <Linkedin size={20} />,
    previewImage: linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/RamParedes06",
    icon: <Github size={20} />,
    previewImage: github,
  },
  {
    label: "GitLab",
    href: "http://gitlab.aique.cloud/mardie",
    icon: <Gitlab size={20} />,
    previewImage: gitlab,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/18FUsf2rZ4DHf7J2H7cw8fJOL7gTmE-Ll/view?usp=sharing",
    icon: <FileText size={20} />,
    // No preview for resume link
    previewImage: resume,
  },
  {
    label: "+63 945 489 0745",
    href: "tel:+639454890745",
    icon: <Phone size={20} />,
    previewImage: phone,
  },
];

// --- TOOLTIP COMPONENT ---
const TooltipPreview = ({ activeLink }) => {
  const tooltipRef = useRef(null);

  useGSAP(() => {
    if (activeLink && activeLink.previewImage) {
      gsap.fromTo(
        tooltipRef.current,
        { scale: 0.8, opacity: 0, x: activeLink.x, y: activeLink.y },
        { scale: 1, opacity: 1, duration: 0.3, ease: "power3.out" }
      );

      const onMouseMove = (e) => {
        gsap.to(tooltipRef.current, {
          x: e.clientX + 15,
          y: e.clientY + 15,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", onMouseMove);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, [activeLink]);

  if (!activeLink || !activeLink.previewImage) return null;

  return (
    <div
      ref={tooltipRef}
      className="fixed top-0 left-0 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-2xl pointer-events-none"
      style={{ width: "320px" }}
    >
      <Image
        src={activeLink.previewImage}
        alt={`${activeLink.label} preview`}
        width={320}
        height={240}
        className="rounded-md w-full h-auto"
      />
      <p className="mt-2 text-center font-bold text-sm">{activeLink.label}</p>
    </div>
  );
};

// --- MAIN CTA COMPONENT ---
const CTA = () => {
  const container = useRef(null);
  const currentYear = new Date().getFullYear();
  const [activeTooltip, setActiveTooltip] = useState(null);

  // --- GSAP ANIMATION ---
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
      });

      tl.from(".divider-cta", { scaleX: 0, duration: 1, ease: "power3.out" })
        .from(
          ".title-cta",
          { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".paragraph-cta",
          { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".email-link-cta",
          { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        )
        .from(
          ".contact-link-item",
          { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 },
          "-=0.4"
        )
        .from(".footer-cta", { opacity: 0, duration: 1 }, "-=0.2");
    },
    { scope: container }
  );

  const handleMouseEnter = (link, e) => {
    if (link.previewImage) {
      setActiveTooltip({ ...link, x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <>
      <TooltipPreview activeLink={activeTooltip} />
      <section
        id="contact"
        ref={container}
        className="bg-white text-black py-24 px-4 sm:px-10 lg:px-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="divider-cta w-24 h-px bg-gray-200 mx-auto mb-20"></div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="title-cta">
              <h1 className="poppins font-extrabold text-4xl sm:text-5xl text-center text-black tracking-wide">
                Let's Build Together
              </h1>
            </div>
            <p className="paragraph-cta poppins text-lg text-gray-600 mt-6 leading-relaxed">
              I'm currently seeking new opportunities as a Front-End Developer.
              If you have a project in mind, an open position, or simply want to
              connect, I would love to hear from you.
            </p>
            <a
              href="mailto:ramparedes06@gmail.com"
              className="email-link-cta poppins font-bold text-2xl sm:text-3xl text-black inline-block mt-10 hover:text-gray-700 transition-colors duration-300"
            >
              ramparedes06@gmail.com
            </a>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-x-8 sm:gap-x-12 gap-y-6 mt-16">
            {contactLinks.map((link) => (
              <div key={link.label} className="contact-link-item">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors duration-300 group"
                  onMouseEnter={(e) => handleMouseEnter(link, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link.icon}
                  <span className="group-hover:underline underline-offset-4">
                    {link.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>

        <footer className="footer-cta text-center text-gray-500 mt-24 pt-10 border-t border-gray-100">
          <p>&copy; {currentYear} Ram Paredes. All Rights Reserved.</p>
        </footer>
      </section>
    </>
  );
};

export default CTA;
