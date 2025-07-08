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

      //! Animate the top bar elements
      tl.from(".top-bar-item", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2, //! Animate each item with a 0.2s delay
      });

      //! Animate the main text content, starting slightly after the top bar
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
      ); //! Overlap with the previous animation by 0.8s

      //! Animate the bottom bar elements
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
      ); //! Start at the same time as the previous animation
    },
    { scope: container }
  ); //! Scope the animations to the container ref

  return (
    <div
      ref={container}
      className="home-container h-screen p-6 md:p-12 lg:p-20 flex flex-col justify-between select-none overflow-hidden"
    >
      {/* === TOP BAR === */}
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

      {/* === CENTER CONTENT === */}
      <div className="flex flex-col justify-center items-center gap-1 text-center">
        {/* We replace BlurText with a simple div for GSAP control */}
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

      {/* === BOTTOM BAR === */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center bottom-bar-item">
          <p className="font-extrabold text-md syne">BIRTHDAY</p>
          <p className="font-extrabold text-xl lg:text-2xl syne">
            JUNE 13, 1999
          </p>
        </div>
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center bottom-bar-item">
          <p className="font-extrabold text-md syne">TECH STACKS</p>
          <p className="font-extrabold text-xl lg:text-2xl syne">
            REACT, NEXTJS
          </p>
        </div>
        <div className="w-full max-w-[300px] py-3 border-b-2 flex flex-col items-center justify-center text-center bottom-bar-item">
          <p className="font-extrabold text-md syne">LOCATION</p>
          <p className="font-extrabold text-xl lg:text-2xl syne">IMUS CAVITE</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
