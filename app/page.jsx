import Home from "./sections/Home";
import About from "./sections/About";
import Highlight from "./sections/Highlights";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Text from "./sections/Text";
import DesignData from "./sections/DesignData";
import Story from "./sections/Story";
import WhatIDo from "./sections/WhatIDo";
export default function Page() {
  return (
    <div className="main-container select-none">
      <Home />
      <About />
      <Text />
      <WhatIDo />
      <Highlight />
      <Process />
      <CTA />
      <DesignData />
    </div>
  );
}
