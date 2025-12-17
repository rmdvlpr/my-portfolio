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
          Welcome to the Philippines! Discover an archipelago where diverse cultures, breathtaking landscapes, and a vibrant culinary scene thrive. From the historic cities and bustling streets of Luzon—which encompasses much more than just Manila—to the serene beaches of the Visayas and the majestic, mountainous terrain of Mindanao, the Philippines offers a rich tapestry of experiences that will captivate your senses and leave you with memories that last a lifetime.
        </p>
      </div>

      {/* New Design Section */}
      <div className="relative montserrat py-5 ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-gradient-to-br from-black via-transparent to-black"></div>
        </div>
        
        {/* Main Title with Decorative Elements */}
        <div className="relative text-center mb-12 sm:mb-16 ">
          <div className="inline-block relative">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-6xl montserrat mb-4 relative z-10">
              Budget Travel
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal italic text-gray-600 mt-2">
                Secrets Unlocked
              </span>
            </h2>
            {/* Decorative line */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-black"></div>
          </div>
          <p className="text-gray-700 text-base sm:text-lg font-medium mt-6 max-w-2xl mx-auto">
            How I turn my skills into passport stamps and adventures into affordable memories
          </p>
        </div>

        {/* Cards with New Layout - Three Card Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8 max-w-7xl mx-auto">
          {/* Travel Coordinator Card */}
          <div className="group relative transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white border-3 border-black rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden h-full">
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-5 rounded-bl-full"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    01
                  </div>
                  <div className="text-right">
                    <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold syne mb-4 text-black">
                  Travel Coordinator
                </h3>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium flex-grow">
                  I coordinate between organizers and local tourism destinations, ensuring smooth experiences. 
                  This role grants me access to exclusive travel opportunities and insider knowledge.
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Drone Pilot Card */}
          <div className="group relative transform lg:rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white border-3 border-black rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden h-full">
              {/* Background accent */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-black opacity-5 rounded-tr-full"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-left">
                    <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                  </div>
                  <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    02
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold syne mb-4 text-black">
                  Drone Pilot
                </h3>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium flex-grow">
                  Organizers bring me for ocular visits to capture aerial shots for marketing. 
                  I join travel events as the designated drone pilot, making trips adventurous and purposeful.
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-black to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Smart Saver Card */}
          <div className="group relative transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white border-3 border-black rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden h-full">
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-black opacity-5 rounded-br-full"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                    03
                  </div>
                  <div className="text-right">
                    <div className="w-8 h-8 border-2 border-black rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold syne mb-4 text-black">
                  Smart Saver
                </h3>
                
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium flex-grow">
                  I hunt for coupons, sales, and seasonal deals while building genuine friendships with locals. 
                  These connections often lead to insider discounts and sometimes completely free services.
                </p>
                
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-black to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <div className="w-4 h-0.5 bg-black"></div>
            <div className="w-2 h-2 bg-black rounded-full"></div>
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
};

export default Header;
