import Home from "./sections/Home";
import About from "./sections/About";
import Highlight from "./sections/Highlights";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Text from "./sections/Text";
import DesignData from "./sections/DesignData";
import Story from "./sections/Story";
import WhatIDo from "./sections/WhatIDo";
import Experience from "./sections/Experience";

export default function Page() {
  return (
    <div className="main-container select-none">
      <Home />
      <WhatIDo />
      <Text />
      <Experience />
      <Highlight />
      <About />
      <Process />
      <CTA />
      <DesignData />
    </div>
  );
}
