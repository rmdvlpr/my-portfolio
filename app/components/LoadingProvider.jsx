"use client";
import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import PortfolioLoadingScreen from "./PortfolioLoadingScreen";
import loadingConfig from "../config/loading";

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasShownLoading, setHasShownLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if loading has been shown in this session (only on client)
    if (typeof window !== 'undefined') {
      const loadingShown = sessionStorage.getItem("loadingShown");
      
      if (!loadingConfig.showOnEveryVisit && loadingShown) {
        // If already shown in this session and not set to show every time, skip loading
        setIsLoading(false);
        setHasShownLoading(true);
      } else {
        // Show loading for first visit in session or if set to show every time
        setIsLoading(true);
      }
    }
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setHasShownLoading(true);
    // Mark loading as shown for this session (only on client)
    if (typeof window !== 'undefined' && !loadingConfig.showOnEveryVisit) {
      sessionStorage.setItem("loadingShown", "true");
    }
  };

  // Choose which loading component to render
  const LoadingComponent = loadingConfig.animationType === 'portfolio' 
    ? PortfolioLoadingScreen 
    : LoadingScreen;

  // Don't render anything until mounted to prevent hydration issues
  if (!isMounted) {
    return <div style={{ opacity: 0 }}>{children}</div>;
  }

  return (
    <>
      {isLoading && !hasShownLoading && (
        <LoadingComponent onComplete={handleLoadingComplete} />
      )}
      <div style={{ opacity: isLoading ? 0 : 1 }}>
        {children}
      </div>
    </>
  );
};

export default LoadingProvider;