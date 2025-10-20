import React from "react";

const Greet = () => {
  return (
    <div className="greet select-none h-[60vh] min-h-[40dvh] bg-white montserrat">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end-safe h-full px-4 md:px-8 py-10 md:py-20 gap-10 md:gap-0 text-center md:text-left">
        {/* Left big text */}
        <div className="relative text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[12rem] leading-tight md:leading-[8rem] lg:leading-[10rem] instrument-serif text-zinc-900">
          <p className="relative z-10">
            Thanks for <br /> visiting!
          </p>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black/10 via-transparent to-transparent"></div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-center md:justify-between items-center md:items-center text-xs sm:text-sm text-black/40 gap-6 md:gap-0 h-auto md:h-80">
          <div>
            Frontend Developer&nbsp; • &nbsp;Travel Enthusiast&nbsp; •
            &nbsp;Software Developer • &nbsp;Drone Pilot&nbsp; • &nbsp;Hiking
            Coordinator&nbsp;
          </div>
          <div className="text-end md:text-center max-w-60">
            Let's create something together, Maybe a website? or Maybe a travel
            Memory
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-between w-full md:w-full gap-2 md:gap-6">
            <p>by ram.paredes</p>
            <p>2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greet;
