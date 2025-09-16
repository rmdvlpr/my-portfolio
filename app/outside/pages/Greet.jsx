import React from "react";

const Greet = () => {
  return (
    <div className="greet select-none h-[60dvh] bg-white montserrat">
      <div className="flex justify-between px-8 py-20 items-end-safe h-full">
        <div className="relative text-[15rem] leading-[12rem] instrument-serif text-zinc-900">
          <p className="relative z-10">
            Thanks for <br /> visiting!
          </p>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black/10 via-transparent to-transparent"></div>
        </div>
        <div className="h-80 text-sm text-black/40 flex flex-col items-center-safe justify-between">
          <div>
            Frontend Developer&nbsp; • &nbsp;Travel Enthusiast&nbsp; •
            &nbsp;Software Engineer
          </div>
          <div className="text-center">
            Let's create something together, <br /> Maybe a website? or Maybe a
            travel Memory
          </div>
          <div className="flex items-center-safe justify-between w-full">
            <p>by ram.paredes</p>
            <p>2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
