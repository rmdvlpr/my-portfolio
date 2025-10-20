import React from "react";
import Gallery from "./Gallery";
const Header = () => {
  return (
    <div className="select-none min-h-screen p-4 sm:p-8 flex flex-col gap-6 sm:gap-10">
      {/* Top Section */}
      <div className="montserrat border-2 border-black rounded-3xl flex flex-col items-start p-6 sm:p-10 lg:flex-row lg:items-center lg:gap-20 lg:px-20">
        <h1 className="font-semibold italic montserrat text-3xl sm:text-4xl lg:text-5xl mb-4 text-center lg:text-left">
          Explore Philippines
        </h1>
        <p className="text-black text-sm sm:text-base text-justify font-semibold">
          As I embark on my journey, I'm excited to share my experiences and
          insights from my travels. From the bustling streets of Manila to the
          serene beaches of El Nido, I'm here to document my adventures and
          provide valuable insights for those who want to embark on their own
          journeys.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6 sm:gap-10 lg:flex-row lg:justify-center montserrat">
        {/* Left Column */}
        <div className="border-2 border-black rounded-3xl p-6  w-full lg:w-1/2">
          <div className="flex items-center gap-4 sm:gap-5 mb-2">
            <h1 className="font-semibold text-5xl sm:text-8xl italic">01</h1>
            <p className="text-xl sm:text-4xl m-0 p-0 syne">
              Travel Coordinator
            </p>
          </div>
          <p className="text-black text-sm sm:text-base text-justify font-semibold">
            I have the privilege to travel because I am also a travel
            coordinator. I coordinate between organizers and the local tourism
            of different destinations, ensuring smooth and memorable experiences
            for every journey.
          </p>
        </div>

        {/* Right Column */}
        <div className="border-2 border-black rounded-3xl p-6  w-full lg:w-1/2">
          <div className="flex items-center gap-4 sm:gap-5 mb-2">
            <h1 className="font-semibold text-5xl sm:text-8xl italic">02</h1>
            <p className="text-xl sm:text-4xl m-0 p-0 syne">Drone Pilot</p>
          </div>
          <p className="text-black text-sm sm:text-base text-justify font-semibold">
            Organizers bring me along to their planned destinations for ocular
            visits, where I capture drone shots and photos to showcase the place
            for marketing. I also get to join many travel events as the
            designated drone pilot for joiners, making each trip both
            adventurous and purposeful.
          </p>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default Header;
