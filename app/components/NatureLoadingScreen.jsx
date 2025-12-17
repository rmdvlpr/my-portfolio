"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NatureLoadingScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    "Opening the portal",
    "Exploring the world",
    "Marking the trail",
    "Pitching the tent", 
    "Setting up the campfire",
    "Telling the story",
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
    }, 1500);

    return () => clearInterval(stepInterval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e8f5e8 0%, #f0fdfa 50%, #ecfdf5 100%)'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Animated Mountain Range */}
          <div className="relative mb-8">
            <motion.svg
              width="120"
              height="80"
              viewBox="0 0 120 80"
              className="text-emerald-600"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
            >
              {/* Background mountains */}
              <motion.path
                d="M0 60 L20 35 L35 45 L50 25 L70 40 L85 20 L100 35 L120 60 L120 80 L0 80 Z"
                fill="#10b981"
                opacity="0.2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.2 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />
              
              {/* Foreground mountains */}
              <motion.path
                d="M0 65 L25 40 L40 50 L60 30 L80 45 L95 25 L120 50 L120 80 L0 80 Z"
                fill="#059669"
                opacity="0.4"
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ duration: 1.2, delay: 0.6 }}
              />
              
              {/* Mountain outline animation */}
              <motion.path
                d="M10 70 L30 45 L45 55 L65 35 L85 50 L105 30 L120 55"
                fill="none"
                stroke="#047857"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ 
                  duration: 2.5, 
                  ease: "easeInOut",
                  delay: 0.8
                }}
              />
              
              {/* Animated footsteps/journey dots */}
              {[0, 1, 2, 3].map((i) => (
                <motion.circle
                  key={i}
                  cx={20 + i * 25}
                  cy={70 - i * 2}
                  r="1.5"
                  fill="#0d9488"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0.3, 1, 0],
                    scale: [0, 1.2, 0.8, 1.2, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Hidden door/portal effect */}
              <motion.rect
                x="55"
                y="45"
                width="10"
                height="20"
                rx="5"
                fill="none"
                stroke="#047857"
                strokeWidth="1"
                strokeDasharray="2,2"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0],
                  strokeDashoffset: [0, -10, -20]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
              />
            </motion.svg>
          </div>

          {/* Animated Leaves and Code Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`leaf-${i}`}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-30, 30, -30],
                  x: [-15, 15, -15],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-emerald-500">
                  <path
                    fill="currentColor"
                    d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"
                  />
                </svg>
              </motion.div>
            ))}
            
            {/* Floating Code Symbols */}
            {['{ }', '</>', '< />', '{ }'].map((symbol, i) => (
              <motion.div
                key={`code-${i}`}
                className="absolute text-teal-400 font-mono text-sm opacity-30"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.1, 0.4, 0.1],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut",
                }}
              >
                {symbol}
              </motion.div>
            ))}
          </div>

          {/* Title Animation */}
          <motion.div
            className="mb-4 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl md:text-4xl syne font-bold text-emerald-800 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {"Welcome to My Life".split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block"
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
            
            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl instrument-serif text-teal-600 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              Behind the Codes
            </motion.p>
          </motion.div>

          {/* Loading Steps */}
          <div className="text-center mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                className="instrument-serif text-xl md:text-2xl text-teal-700 font-medium"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {steps[currentStep]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Nature-themed Progress Bar */}
          <div className="w-64 h-2 bg-emerald-100 rounded-full overflow-hidden shadow-inner">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #10b981, #0d9488, #14b8a6)'
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>

          {/* Percentage */}
          <motion.div
            className="mt-4 montserrat text-sm text-emerald-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {Math.round(((currentStep + 1) / steps.length) * 100)}%
          </motion.div>

          {/* Floating Nature Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[
              { left: 20, top: 25, type: 'circle' },
              { left: 80, top: 20, type: 'circle' },
              { left: 10, top: 70, type: 'circle' },
              { left: 90, top: 65, type: 'circle' },
              { left: 40, top: 15, type: 'circle' },
              { left: 60, top: 80, type: 'circle' }
            ].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  background: i % 2 === 0 ? '#10b981' : '#0d9488'
                }}
                animate={{
                  y: [-25, -50, -25],
                  opacity: [0, 0.7, 0],
                  scale: [0, 1.2, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  delay: i * 0.6,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Digital Portal/Door Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-1/2 w-96 h-96 rounded-full border-2 border-teal-300"
                style={{
                  transform: 'translateX(-50%)',
                  opacity: 0.1
                }}
                animate={{
                  scale: [0, 2, 0],
                  opacity: [0.3, 0.1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Subtle Binary Rain Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`binary-${i}`}
                className="absolute text-emerald-200 font-mono text-xs opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                }}
                animate={{
                  y: ['0vh', '110vh'],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>

          {/* Welcome Message */}
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <p className="text-emerald-600 font-mono text-sm text-center opacity-60">
              // Entering personal space...
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NatureLoadingScreen;