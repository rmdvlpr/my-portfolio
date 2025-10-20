"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ToSee = () => {
  const containerRef = useRef(null);
  const text = "To see everything is to understand more.";
  const words = text.split(" ");
  const wordCount = words.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <div
      ref={containerRef}
      className="h-[20vh] md:h-screen select-none flex items-center justify-center p-4 overflow-hidden text-center"
    >
      <div className="instrument-serif text-3xl sm:text-4xl md:text-10xl lg:text-[10rem] max-w-7xl text-black leading-[0.8]">
        {words.map((word, i) => {
          const start = i / wordCount;
          const end = (i + 1) / wordCount;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

          return (
            <motion.span
              key={i}
              style={{ opacity }}
              className="inline-block mr-[0.5rem] leading-none"
            >
              {word}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default ToSee;
