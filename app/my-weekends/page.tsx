// app/my-weekends/page.tsx

"use client";
import { useState, useEffect } from "react";
import HeroOutside from "./pages/Hero.jsx";
import Voyage from "./pages/Voyage.jsx";
import Header from "./pages/Header.jsx";
import Quote from "./pages/Quote.jsx";
import Greet from "./pages/Greet.jsx";
import ToSee from "./pages/ToSee.jsx";
import CampfireMoments from "./pages/CampfireMoments.jsx";
import SummitReflections from "./pages/SummitReflections.jsx";
import NatureLoadingScreen from "../components/NatureLoadingScreen.jsx";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <NatureLoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && (
        <>
          <HeroOutside />
          <Quote />
          <Voyage />
          <Header />
          <CampfireMoments />
          <SummitReflections />
          <ToSee />
          <Greet />
        </>
      )}
    </>
  );
};

export default Page;
