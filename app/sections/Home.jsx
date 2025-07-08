"use client";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import Button from "../components/Button";
import BlurText from "../components/BlurText";
import { Github } from "lucide-react";

const Home = () => {
  return (
    // Responsive Padding: smaller on mobile (p-6), larger on desktop (lg:p-20)
    <div className="home-container h-screen p-6 md:p-12 lg:p-20 flex flex-col justify-between select-none">
      {/* === TOP BAR === */}
      {/* This layout is flexible enough to shrink, but we ensure vertical alignment is centered */}
      <div className="flex justify-between items-center pb-5">
        <div className="flex gap-4">
          <a href="https://www.instagram.com/nature.lly_ram/">
            <BsInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ram-paredes/">
            <SlSocialLinkedin size={24} />
          </a>
          <a href="https://github.com/RamParedes06">
            <Github size={24} />
          </a>
        </div>
        <div>
          {/* Responsive Font Size for "Welcome!" */}
          <p className="syne  font-extrabold hidden lg:block text-[14px] md:text-[18px] lg:text-2xl">
            Welcome!
          </p>
        </div>
        <div className="flex justify-end">
          <Button label="BOOK A CALL" />
        </div>
      </div>

      {/* === CENTER CONTENT === */}
      {/* Added text-center to handle wrapping gracefully */}
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        <BlurText
          text="RAM PAREDES"
          delay={150}
          animateBy="words"
          direction="top"
          // Responsive Font Size: starts smaller, gets huge on large screens
          className="text-[53px]  md:text-8xl lg:text-[105px] font-extrabold poppins"
        />
        <p
          // Responsive Font Size
          className="poppins font-extrabold text-3xl md:text-5xl lg:text-6xl text-[#bfbfbf]"
        >
          FRONT END DEVELOPER
        </p>
        <p
          // Responsive Font Size
          className="poppins font-extrabold text-base md:text-lg lg:text-xl"
        >
          Turning ideas into beautiful, intuitive products that make a
          difference.
        </p>
      </div>

      {/* === BOTTOM BAR === */}
      {/* Stacks vertically on mobile (flex-col), becomes a row on large screens (lg:flex-row) */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center">
          <p className="font-extrabold text-md syne">BIRTHDAY</p>
          {/* Responsive Font Size */}
          <p className="font-extrabold text-xl lg:text-2xl syne">
            JUNE 13, 1999
          </p>
        </div>
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center">
          <p className="font-extrabold text-md syne">TECH STACKS</p>
          <p className="font-extrabold text-xl lg:text-2xl syne">
            REACT, NEXTJS
          </p>
        </div>
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center">
          <p className="font-extrabold text-md syne">LOCATION</p>
          <p className="font-extrabold text-xl lg:text-2xl syne">IMUS CAVITE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
