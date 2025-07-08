"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { Github } from "lucide-react";
import Button from "../components/Button";

const Home = () => {
  const container = useRef(null);

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
          <p className="syne font-extrabold hidden lg:block text-[14px] md:text-[18px] lg:text-2xl">
            Welcome!
          </p>
        </div>
        <div className="flex justify-end top-bar-item">
          <Button label="BOOK A CALL" />
        </div>
      </div>

      {/* === CENTER CONTENT (Unchanged) === */}
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <div className="hero-text">
          <h1 className="text-[53px] md:text-8xl lg:text-[105px] font-extrabold poppins">
            RAM PAREDES
          </h1>
        </div>
        <div className="hero-text">
          <p className="poppins font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#bfbfbf]">
            FRONT END DEVELOPER
          </p>
        </div>
        <div className="hero-text">
          <p className="poppins font-extrabold text-base md:text-lg lg:text-xl">
            Turning ideas into beautiful, intuitive products that make a
            difference.
          </p>
        </div>
      </div>

      {/* === BOTTOM BAR (Refactored) === */}
      {/* Using justify-center and a larger gap for controlled, spacious alignment */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-24">
        {/* Item 1: Birthday */}
        <div className="bottom-bar-item flex flex-col items-center justify-center text-center w-64">
          {/* Refined typography and border-t for top border */}
          <div className="w-full pt-4 border-t border-gray-300">
            <p className="text-sm font-medium text-gray-500 tracking-widest">
              BIRTHDAY
            </p>
            <p className="text-xl lg:text-2xl font-extrabold syne mt-1">
              JUNE 13, 1999
            </p>
          </div>
        </div>

        {/* Item 2: Tech Stacks */}
        <div className="bottom-bar-item flex flex-col items-center justify-center text-center w-64">
          <div className="w-full pt-4 border-t border-gray-300">
            <p className="text-sm font-medium text-gray-500 tracking-widest">
              TECH STACKS
            </p>
            <p className="text-xl lg:text-2xl font-extrabold syne mt-1">
              REACT, NEXTJS
            </p>
          </div>
        </div>

        {/* Item 3: Location */}
        <div className="bottom-bar-item flex flex-col items-center justify-center text-center w-64">
          <div className="w-full pt-4 border-t border-gray-300">
            <p className="text-sm font-medium text-gray-500 tracking-widest">
              LOCATION
            </p>
            <p className="text-xl lg:text-2xl font-extrabold syne mt-1">
              IMUS CAVITE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
