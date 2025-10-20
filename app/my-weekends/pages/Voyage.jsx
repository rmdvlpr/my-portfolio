"use client";
import React, { useRef } from "react";
import biglagoon from "../../assets/biglagoon.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const bg =
  "https://ik.imagekit.io/ramparedes/Images/biglagoon.jpg?updatedAt=1758617824735";

const Voyage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for the animation. It starts at a progress of 0.
      const tl = gsap.timeline({ defaults: { ease: "none" } });

      // Add animations to the timeline.
      // These will be "played" based on the scroll position.
      tl.from(".voyage-text", {
        y: 40,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".prvlg-text",
          {
            y: 40,
            opacity: 0,
            duration: 1,
          },
          "<"
        )
        .from(
          ".underline-path",
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
          },
          "<"
        );

      ScrollTrigger.create({
        trigger: container.current,
        start: "top bottom", // Animation starts when the top of the section hits the bottom of the viewport
        end: "top 10%", // Animation completes when the top of the section is 30% from the top
        scrub: true, // The key property: ties animation progress directly to scroll
        animation: tl,
      });
    },
    { scope: container, revertOnUpdate: true }
  );

  return (
    <div className="h-screen bg-white p-4 sm:p-8">
      <div
        ref={container}
        className="rounded-3xl relative overflow-hidden flex items-center justify-center h-full"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center">
          <div className="select-none flex gap-2 sm:gap-10 md:gap-10 lg:gap-10 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] italic z-2 font-bold text-white gfs-didot drop-shadow-2xl text-center px-4">
            <span className="voyage-text">Voyage</span>{" "}
            <span className="tracking-[-0.1em] gfs-didot relative">
              <span className="prvlg-text">Prvlg</span>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white underline-path"></div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voyage;
