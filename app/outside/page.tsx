// app/outside/page.tsx

import React from "react";
import HeroOutside from "./pages/Hero.jsx";
import Voyage from "./pages/Voyage.jsx";
import Header from "./pages/Header.jsx";
import Quote from "./pages/Quote.jsx";
import Greet from "./pages/Greet.jsx";

const page = () => {
  return (
    <>
      <HeroOutside />
      <Quote />
      <Voyage />
      <Header />
      <Greet />
    </>
  );
};

export default page;
