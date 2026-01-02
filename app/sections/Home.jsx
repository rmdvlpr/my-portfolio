"use client";
import React, { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { Github } from "lucide-react";
import { Phone } from "lucide-react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const container = useRef(null);
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const taglineText =
    "Turning ideas into beautiful, intuitive products that make a difference.";
  const frontEndText = "FRONT END DEVELOPER";

  // Typing effect for tagline
  useEffect(() => {
    const timer = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= taglineText.length) {
          setDisplayedText(taglineText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setShowCursor(false);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }, 3500); // Start typing after FRONT END DEVELOPER animation completes

    return () => clearTimeout(timer);
  }, []);

  const handleClickOutside = () => {
    router.push("/my-weekends");
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navigateToProjects = () => {
    router.push("/projects");
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
      {/* === TOP BAR === */}
      <div className="flex justify-between items-center pb-5">
        <div className="max-w-[230px] w-full flex gap-4 ">
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
          <div
            className="top-bar-item cursor-pointer"
            onClick={scrollToContact}
          >
            <Phone size={24} />
          </div>
        </div>
        <div className=" max-w-[400px] w-full top-bar-item text-center mb-2 md:mb-0 hidden md:block">
          <p className="montserrat select-none font-extrabold text-[14px] md:text-[18px] lg:text-2xl">
            Welcome to my weekdays!
          </p>
        </div>
        <div className="top-bar-item max-w-[230px] w-full">
          <Button label="WEEKENDS" onClick={handleClickOutside} showLeaf />
        </div>
      </div>

      {/* === CENTER CONTENT === */}
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        {/* Name with letter-by-letter animation */}
        <div className="hero-text">
          <motion.div
            className="text-[53px] md:text-8xl lg:text-[105px] syne relative hero-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {"Ram Paredes".split("").map((char, index) => (
              <motion.span
                key={index}
                className={
                  char === "a" ? "italic inline-block" : "inline-block"
                }
                initial={{
                  opacity: 0,
                  y: 100,
                  rotateX: -90,
                  scale: 0.3,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                transition={{
                  delay: 0.8 + index * 0.08,
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#bfbfbf",
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Animated "FRONT END DEVELOPER" */}
        <div className="hero-text w-full px-2 sm:px-4">
          <motion.div
            className="playfair-display font-medium text-[#bfbfbf] tracking-wider whitespace-nowrap text-center"
            style={{
              fontSize: 'clamp(1.2rem, 6vw, 4rem)',
              lineHeight: '1.1'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            {frontEndText.split("").map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.5,
                  rotateY: -90,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotateY: 0,
                }}
                transition={{
                  delay: 1.8 + index * 0.05,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.1,
                  color: "#ffffff",
                  transition: { duration: 0.2 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Typing effect for tagline */}
        <div className="hero-text">
          <motion.div
            className="font-extrabold text-base md:text-lg lg:text-xl min-h-[2em] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
          >
            <span className="relative">
              {displayedText}
              {showCursor && (
                <motion.span
                  className="inline-block w-0.5 h-5 bg-current ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              )}
            </span>
          </motion.div>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
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

        <div className="syne font-extrabold text-[14px] md:text-[18px] lg:text-2xl relative">
          <motion.div
            className="relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.7, duration: 0.3 }}
            onClick={navigateToProjects}
          >
            {/* Background text for proper spacing */}
            <p className="opacity-0">Project showcase.</p>

            {/* Animated text overlay */}
            <div className="absolute inset-0 flex">
              {[
                "P",
                "r",
                "o",
                "j",
                "e",
                "c",
                "t",
                " ",
                "s",
                "h",
                "o",
                "w",
                "c",
                "a",
                "s",
                "e",
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
                    delay: 3.0 + index * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    opacity: { duration: 0.3 },
                    filter: { duration: 0.4 },
                    y: { duration: 0.4, ease: "backOut" },
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
                  delay: 4.2,
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
