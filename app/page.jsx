import Home from "./sections/Home";
import About from "./sections/About";
import Highlight from "./sections/Highlights";
import Process from "./sections/Process";
import CTA from "./sections/CTA";
import Text from "./sections/Text";
export default function Page() {
  return (
    <div className="main-container">
      <Home />
      <About />
      <Text />
      <Highlight />
      <Process />
      <CTA />
    </div>
  );
}
