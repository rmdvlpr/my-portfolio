"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PortfolioLoadingScreen = ({ onComplete }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const words = ["Design", "Code", "Create", "Inspire"];
  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f59e0b"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev < words.length - 1) {
          return prev + 1;
        } else {
          clearInterval(wordInterval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 1000);
          }, 800);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(wordInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
          }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${colors[currentWord]} 0%, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Main Content Container */}
          <div className="relative z-10 text-center">
            {/* Portfolio Icon Animation */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
              }}
            >
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="text-gray-800"
              >
                {/* Portfolio/Briefcase Icon */}
                <motion.rect
                  x="20"
                  y="35"
                  width="60"
                  height="40"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                />
                
                {/* Handle */}
                <motion.path
                  d="M35 35 V30 Q35 25 40 25 H60 Q65 25 65 30 V35"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Decorative elements */}
                <motion.circle
                  cx="35"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5, ease: "backOut" }}
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.7, duration: 0.5, ease: "backOut" }}
                />
                <motion.circle
                  cx="65"
                  cy="50"
                  r="2"
                  fill="currentColor"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.9, duration: 0.5, ease: "backOut" }}
                />
              </svg>
            </motion.div>

            {/* Name Animation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.h1 className="text-5xl md:text-6xl syne font-bold text-gray-800 mb-2">
                {"Ram".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className={char === "a" ? "italic inline-block" : "inline-block"}
                    initial={{
                      opacity: 0,
                      y: 100,
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
                      delay: 1.2 + index * 0.1,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "spring",
                      stiffness: 120,
                      damping: 12,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.h2 
                className="playfair-display text-2xl md:text-3xl text-gray-600 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                Portfolio
              </motion.h2>
            </motion.div>

            {/* Dynamic Word Animation */}
            <div className="mb-12 h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWord}
                  className="text-4xl md:text-5xl font-bold"
                  style={{ color: colors[currentWord] }}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    rotateY: -90,
                    filter: "blur(20px)"
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotateY: 0,
                    filter: "blur(0px)"
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 1.5, 
                    rotateY: 90,
                    filter: "blur(20px)"
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  {words[currentWord]}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mb-8">
              {words.map((_, index) => (
                <motion.div
                  key={index}
                  className="w-3 h-3 rounded-full"
                  style={{
                    backgroundColor: index <= currentWord ? colors[index] : '#e5e7eb'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: index <= currentWord ? 1 : 0.7,
                    opacity: index <= currentWord ? 1 : 0.3
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "backOut",
                    delay: index * 0.1
                  }}
                />
              ))}
            </div>

            {/* Loading Text */}
            <motion.p
              className="montserrat text-sm text-gray-500 font-medium tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              LOADING EXPERIENCE
            </motion.p>
          </div>

          {/* Completion Animation */}
          {currentWord === words.length - 1 && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {/* Success particles */}
              {[
                { angle: 0, radius: 20 },
                { angle: 30, radius: 20 },
                { angle: 60, radius: 20 },
                { angle: 90, radius: 20 },
                { angle: 120, radius: 20 },
                { angle: 150, radius: 20 },
                { angle: 180, radius: 20 },
                { angle: 210, radius: 20 },
                { angle: 240, radius: 20 },
                { angle: 270, radius: 20 },
                { angle: 300, radius: 20 },
                { angle: 330, radius: 20 }
              ].map((particle, i) => {
                const radians = particle.angle * Math.PI / 180;
                const startX = 50 + Math.cos(radians) * particle.radius;
                const startY = 50 + Math.sin(radians) * particle.radius;
                const endX = Math.cos(radians) * 100;
                const endY = Math.sin(radians) * 100;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: colors[i % colors.length],
                      left: `${startX}%`,
                      top: `${startY}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: endX,
                      y: endY,
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: 0.5 + i * 0.05
                    }}
                  />
                );
              })}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioLoadingScreen;