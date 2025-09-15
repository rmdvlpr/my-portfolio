"use client";
import React from "react";
import me3 from "../../assets/me3.png";
import ifugao from "../../assets/ifugao.png";
import ledge from "../../assets/ledge.jpg";
import friends2 from "../../assets/friends2.png";
import friends3 from "../../assets/friends3.png";
import friends4 from "../../assets/friends4.png";
import maligcong from "../../assets/maligcong.jpg";
import bontoc from "../../assets/bontoc.jpg";
import awasen from "../../assets/awasen.png";
import bghero from "../../assets/BG_HERO.png";
import cagua from "../../assets/cagua.png";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { Github } from "lucide-react";
import { Braces } from "lucide-react";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

const HeroOutside = () => {
  const router = useRouter();
  const handleClickOutside = () => {
    router.push("/");
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
  return (
    <div
      className="min-h-screen relative  flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundImage: `url(${bghero.src})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute px-20 top-20 w-full flex justify-between items-center pb-5 text-white">
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
          <div
            className="top-bar-item cursor-pointer"
            onClick={handleClickOutside}
          >
            <Braces size={24} />
          </div>
        </div>
        <div className="top-bar-item">
          <p className="adamina font-extrabold hidden lg:block text-[14px] md:text-[18px] lg:text-2xl">
            Welcome to my weekends!
          </p>
        </div>
        <div className="flex justify-end top-bar-item">
          <Button
            label="BOOK A CALL"
            onClick={scrollToContact}
            bgColor="bg-white"
            textColor="text-black"
          />
        </div>
      </div>
      <div className="max-w-7xl z-2 w-full mx-auto bg-black rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="w-full lg:w-2/5 flex-shrink-0 bg-gradient-to-br from-zinc-100 to-zinc-300 text-black p-8 sm:p-12 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            A Glimpse
            <br />
            Beyond
            <br />
            the Code.
          </h1>
          <p className="text-zinc-700 text-base md:text-lg leading-relaxed max-w-md">
            When I'm not building for the web, I'm exploring the natural world.
            My passions lie in hiking, seeking quiet moments in nature, and
            connecting with new friends. These adventures across the Philippines
            keep me grounded and fuel my creativity.
          </p>
        </div>

        <div className="w-full lg:w-3/5 p-4 sm:p-6 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-500/40 blur-3xl rounded-full pointer-events-none"></div>

          <div className="h-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3 flex flex-col">
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
              <div className="bg-zinc-900/50 p-4 sm:p-6 rounded-xl text-white">
                <h3 className="font-semibold text-lg sm:text-xl">
                  Building Friendships
                </h3>
                <p className="text-zinc-300 text-sm mt-1">
                  My journeys are about more than just the destination. I love
                  meeting new people and building lasting friendships that
                  enrich my life and broaden my perspective.
                </p>
              </div>
              <div className="flex-grow relative rounded-t-full rounded-b-full overflow-hidden">
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
              <div className="h-1/3 relative rounded-xl overflow-hidden">
                <Image
                  src={awasen}
                  alt="People collaborating"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 object-center"
                  loading="lazy"
                />
              </div>
              <div className="flex-grow relative rounded-xl overflow-hidden">
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
