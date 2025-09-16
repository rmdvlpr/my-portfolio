"use client";
import React, { useRef } from "react";
import me3 from "../../assets/me3.png";
import bghero from "../../assets/BG_HERO.png";
import awasen from "../../assets/awasen.png";
import cagua from "../../assets/cagua.png";
import friends4 from "../../assets/friends4.png";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { Github } from "lucide-react";
import { Braces } from "lucide-react";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HeroOutside = () => {
  const container = useRef(null);
  const router = useRouter();

  const handleClickOutside = () => {
    router.push("/");
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".top-bar-item", {
        y: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      tl.from(
        ".outside-hero-content",
        {
          y: 50,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.8"
      );

      tl.from(
        ".outside-hero-text",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
        },
        "-=0.6"
      );

      tl.from(
        ".nature-card",
        {
          x: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        ".friends-card",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );

      tl.from(
        ".peace-card",
        {
          x: -50,
          opacity: 0,
          duration: 1,
        },
        "-=0.5"
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen relative flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundImage: `url(${bghero.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Updated Nav for Mobile Responsiveness */}
      <div className="nav montserrat absolute top-5 md:top-20 w-full z-10 text-white flex  items-center justify-between px-4 md:px-12 lg:px-20  md:flex md:justify-between">
        <div className="flex gap-4 mb-2 md:mb-0">
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
          {/* <div
            className="top-bar-item cursor-pointer"
            onClick={handleClickOutside}
          >
            <Braces size={24} />
          </div> */}
        </div>

        <div className="top-bar-item text-center mb-2 md:mb-0 hidden md:block">
          <p className="montserrat select-none font-extrabold text-[14px] md:text-[18px] lg:text-2xl">
            Welcome to my weekends!
          </p>
        </div>

        <div className="top-bar-item">
          <Button
            label="TO MY WEEKDAYS"
            onClick={() => router.push("/")}
            bgColor="bg-white"
            textColor="text-black"
          />
        </div>
      </div>

      {/* Main content container with negative margin */}
      <div className="max-w-7xl select-none w-full mx-auto bg-black rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden outside-hero-content mt-30 md:mt-24">
        {/* ... (rest of the content remains unchanged) ... */}
        {/* Left Panel */}
        <div className=" montserrat w-full lg:w-2/5 flex-shrink-0 bg-gradient-to-br from-zinc-100 to-zinc-300 text-black p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 outside-hero-text">
            A Glimpse
            <br />
            Beyond
            <br />
            the Code.
          </h1>
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed max-w-md outside-hero-text">
            When I'm not building for the web, I'm exploring the natural world.
            My passions lie in hiking, seeking quiet moments in nature, and
            connecting with new friends. These adventures across the Philippines
            keep me grounded and fuel my creativity.
          </p>
        </div>

        <div className="w-full lg:w-3/5 p-4 sm:p-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-500/40 blur-3xl rounded-full pointer-events-none"></div>

          <div className="h-full flex flex-col md:flex-row gap-4 montserrat">
            {/* Connecting with Nature Card */}
            <div className="w-full md:w-1/3 flex flex-col nature-card">
              <div className="flex-grow relative rounded-xl overflow-hidden">
                <Image
                  src={me3}
                  alt="Side profile of a person"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Connecting with Nature
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">
                    Whether I'm on a mountain trail or by the sea, I'm always
                    looking for a new perspective. These moments in nature help
                    me stay present and find new inspiration.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {/* Building Friendships Card */}
              <div className="bg-zinc-900/50 p-4 sm:p-6 rounded-xl text-white friends-card">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Building Friendships
                </h3>
                <p className="text-zinc-300 text-sm mt-1">
                  My journeys are about more than just the destination. I love
                  meeting new people and building lasting friendships that
                  enrich my life and broaden my perspective.
                </p>
              </div>
              <div className="flex-grow relative rounded-t-full rounded-b-full overflow-hidden friends-card">
                <Image
                  src={friends4}
                  alt="Close up of an eye"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 scale-110"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="w-full md:w-1/3 flex flex-col gap-4">
              {/* A Different Kind of Peace Card - Top Image */}
              <div className="h-1/3 relative rounded-xl overflow-hidden peace-card">
                <Image
                  src={awasen}
                  alt="People collaborating"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 object-center"
                  loading="lazy"
                />
              </div>
              {/* A Different Kind of Peace Card - Bottom Text and Image */}
              <div className="flex-grow relative rounded-xl overflow-hidden peace-card">
                <Image
                  src={cagua}
                  alt="Sunglasses on a textured surface"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    A Different Kind of Peace
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">
                    Exploring the Philippines is a way for me to disconnect from
                    the digital world. It’s where I find quiet moments, recharge
                    my creativity, and gain a sense of peace that keeps me
                    grounded.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOutside;
