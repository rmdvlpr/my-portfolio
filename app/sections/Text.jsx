import React from "react";
import ScrollVelocity from "../components/TextVelocity";

const Text = () => {
  return (
    <div className="h-[50vh] flex justify-center items-center overflow-hidden">
      <ScrollVelocity
        texts={["Front-End Developer", "Software Engineer"]}
        velocity={50}
        className="custom-scroll-text"
      />
    </div>
  );
};

export default Text;
