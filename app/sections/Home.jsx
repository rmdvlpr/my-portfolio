"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { Github } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
  const container = useRef(null);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Fallback: try to find the contact section after a short delay
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.warn("Contact section not found");
        }
      }, 100);
    }
  };

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate the top bar elements
      tl.from(".top-bar-item", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      });

      // Animate the main text content
      tl.from(
        ".hero-text",
        {
          y: 40,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.8"
      );

      // Animate the bottom bar elements
      tl.from(
        ".bottom-bar-item",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        },
        "<"
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="home-container h-screen p-6 md:p-12 lg:p-20 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* === TOP BAR (Unchanged) === */}
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/nature.lly_ram/"
            className="top-bar-item"
          >
            <BsInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ram-paredes/"
            className="top-bar-item"
          >
            <SlSocialLinkedin size={24} />
          </a>
          <a href="https://github.com/RamParedes06" className="top-bar-item">
            <Github size={24} />
          </a>
        </div>
        <div className="top-bar-item">
          <p className="adamina font-extrabold hidden lg:block text-[14px] md:text-[18px] lg:text-2xl">
            Welcome!
          </p>
        </div>
        <div className="flex justify-end top-bar-item">
          <Button label="BOOK A CALL" onClick={scrollToContact} />
        </div>
      </div>

      {/* === CENTER CONTENT (Unchanged) === */}
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <div className="hero-text">
          <div className="text-[53px] md:text-8xl lg:text-[105px] adamina relative">
            R<span className="italic">a</span>m Paredes
          </div>
        </div>
        <div className="hero-text">
          <p className="syne font-medium text-3xl md:text-5xl lg:text-6xl text-[#bfbfbf]">
            FRONT END DEVELOPER
          </p>
        </div>
        <div className="hero-text">
          <p className="font-extrabold text-base md:text-lg lg:text-xl">
            Turning ideas into beautiful, intuitive products that make a
            difference.
          </p>
        </div>
      </div>

      {/* === BOTTOM BAR (Refactored) === */}
      {/* Using justify-center and a larger gap for controlled, spacious alignment */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
        <div className="syne font-extrabold text-[14px] md:text-[18px] lg:text-2xl relative">
          <motion.div
            className="relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.3 }}
            onClick={scrollToPortfolio}
          >
            {/* Background text for proper spacing */}
            <p className="opacity-0">View my work.</p>

            {/* Animated text overlay */}
            <div className="absolute inset-0 flex">
              {[
                "V",
                "i",
                "e",
                "w",
                " ",
                "m",
                "y",
                " ",
                "w",
                "o",
                "r",
                "k",
                ".",
              ].map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{
                    opacity: 0,
                    pathLength: 0,
                    filter: "blur(10px)",
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    pathLength: 1,
                    filter: "blur(0px)",
                    y: 0,
                  }}
                  transition={{
                    delay: 2.8 + index * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.3 },
                    filter: { duration: 0.4 },
                    y: { duration: 0.4, ease: "backOut" },
                  }}
                  style={{
                    textShadow: "0 0 8px currentColor",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* SVG drawing effect overlay */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 200 40"
              style={{ transform: "scale(1.1)" }}
            >
              {/* Underline stroke */}
              <motion.path
                d="M 20 32 Q 60 28 100 30 Q 140 32 180 29"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  delay: 3.8,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
