"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    "Crafting experiences",
    "Building connections", 
    "Creating magic",
    "Almost there"
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 500);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(stepInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Mountain SVG Animation */}
          <div className="relative mb-8">
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              className="text-gray-800"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              {/* Mountain peaks with drawing animation */}
              <motion.path
                d="M20 70 L35 40 L50 55 L65 30 L80 70 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              
              {/* Mountain fill animation */}
              <motion.path
                d="M20 70 L35 40 L50 55 L65 30 L80 70 Z"
                fill="currentColor"
                opacity="0.1"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ 
                  duration: 1, 
                  ease: "backOut",
                  delay: 1.5
                }}
              />
              
              {/* Animated dots representing journey */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx={30 + i * 20}
                  cy={75}
                  r="2"
                  fill="currentColor"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.svg>
          </div>

          {/* Name Animation */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl syne font-bold text-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {"Ram Paredes".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className={char === "a" ? "italic inline-block" : "inline-block"}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotateX: -90,
                    scale: 0.3,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.8 + index * 0.08,
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>

          {/* Loading Steps */}
          <div className="text-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                className="instrument-serif text-xl md:text-2xl text-gray-600 font-medium "
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {steps[currentStep]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gray-800 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            className="mt-4 montserrat text-sm text-gray-500 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </motion.div>

          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { left: 25, top: 30 },
              { left: 75, top: 25 },
              { left: 15, top: 60 },
              { left: 85, top: 55 },
              { left: 45, top: 20 },
              { left: 65, top: 70 }
            ].map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gray-400 rounded-full"
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                }}
                animate={{
                  y: [-20, -40, -20],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>


        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;