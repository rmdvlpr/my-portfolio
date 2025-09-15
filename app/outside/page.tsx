// app/outside/page.tsx

import React from "react";
import Image from "next/image";
import bghero from "../assets/BG_HERO.png";
import topview from "../assets/topview.jpg";
import topview2 from "../assets/topview2.jpg";
import awasen from "../assets/awasen.png";
import helicopter from "../assets/helicopterisland.jpg";
import me1 from "../assets/me1.png";
import me2 from "../assets/me2.png";
import me3 from "../assets/me3.png";
import friends1 from "../assets/friends1.png";
import espada from "../assets/espada.png";
import cagua from "../assets/cagua.png";
import bontoc from "../assets/bontoc.jpg";
import biglagoon from "../assets/biglagoon.jpg";
import ifugao from "../assets/ifugao.png";
import maligcong from "../assets/maligcong.jpg";
import ledge from "../assets/ledge.jpg";
const page = () => {
  return (
    <div>
      <div
        className="min-h-screen relative  flex items-center justify-center p-4 sm:p-6 lg:p-8"
        style={{
          backgroundImage: `url(${bghero.src})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-10"></div>

        <div className="max-w-7xl w-full mx-auto bg-black rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          {/* Left Panel */}
          <div className="w-full lg:w-2/5 flex-shrink-0 bg-gradient-to-br from-zinc-100 to-zinc-300 text-black p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              A Glimpse
              <br />
              Beyond
              <br />
              the Code.
            </h1>
            <p className="text-zinc-700 text-base md:text-lg leading-relaxed max-w-md">
              When I'm not building for the web, I'm exploring the natural
              world. My passions lie in hiking, seeking quiet moments in nature,
              and connecting with new friends. These adventures across the
              Philippines keep me grounded and fuel my creativity.
            </p>
          </div>

          {/* Right Panel */}
          <div className="w-full lg:w-3/5 p-4 sm:p-6 relative">
            {/* Green Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-green-500/40 blur-3xl rounded-full pointer-events-none"></div>

            <div className="h-full flex flex-col md:flex-row gap-4">
              {/* Column 1: See Every Interaction */}
              <div className="w-full md:w-1/3 flex flex-col">
                <div className="flex-grow relative rounded-xl overflow-hidden">
                  <Image
                    src={me3}
                    alt="Side profile of a person"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                    <h3 className="font-semibold text-lg sm:text-xl">
                      Connecting with Nature
                    </h3>
                    <p className="text-zinc-300 text-sm mt-1">
                      Whether I'm on a mountain trail or by the sea, I'm always
                      looking for a new perspective. These moments in nature
                      help me stay present and find new inspiration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Column 2: Stay Focused & Eye Image */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="bg-zinc-900/50 p-4 sm:p-6 rounded-xl text-white">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    Building Friendships
                  </h3>
                  <p className="text-zinc-300 text-sm mt-1">
                    My journeys are about more than just the destination. I love
                    meeting new people and building lasting friendships that
                    enrich my life and broaden my perspective.
                  </p>
                </div>
                <div className="flex-grow relative rounded-t-full rounded-b-full overflow-hidden">
                  <Image
                    src={ifugao}
                    alt="Close up of an eye"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 scale-110" // Slight scale for better fit
                  />
                </div>
              </div>

              {/* Column 3: Collaboration & Clear Vision */}
              <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="h-1/3 relative rounded-xl overflow-hidden">
                  <Image
                    src={friends1}
                    alt="People collaborating"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                </div>
                <div className="flex-grow relative rounded-xl overflow-hidden">
                  <Image
                    src={cagua}
                    alt="Sunglasses on a textured surface"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-end p-4 sm:p-6 text-white">
                    <h3 className="font-semibold text-lg sm:text-xl">
                      A Different Kind of Peace
                    </h3>
                    <p className="text-zinc-300 text-sm mt-1">
                      Exploring the Philippines is a way for me to disconnect
                      from the digital world. It’s where I find quiet moments,
                      recharge my creativity, and gain a sense of peace that
                      keeps me grounded.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
