// app/my-weekends/page.tsx

import React from "react";
import HeroOutside from "./pages/Hero.jsx";
import Voyage from "./pages/Voyage.jsx";
import Header from "./pages/Header.jsx";
import Quote from "./pages/Quote.jsx";
import Greet from "./pages/Greet.jsx";
import ToSee from "./pages/ToSee.jsx";
import Nature from "./pages/Nature.jsx";
import Video from "./pages/Video.jsx";

const page = () => {
  return (
    <>
      <HeroOutside />
      <Quote />
      <Voyage />
      <Header />
      <ToSee />
      {/* <Nature /> */}
      <Greet />
    </>
  );
};

export default page;
