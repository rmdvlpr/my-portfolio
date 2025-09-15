// app/outside/page.tsx

import React from "react";
import HeroOutside from "./pages/Hero.jsx";
import Voyage from "./pages/Voyage.jsx";
import Header from "./pages/Header.jsx";

const page = () => {
  return (
    <>
      <HeroOutside />
      <div className="h-[20vh] sm:h-[50vh] md:h-[50vh] lg:h-[50vh]" />
      <Voyage />
      <Header />
    </>
  );
};

export default page;
