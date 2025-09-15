import React from "react";
import topview from "../../assets/topview.jpg";
import awasen from "../../assets/awasen.png";
import helicopter from "../../assets/helicopterisland.jpg";
import me1 from "../../assets/me1.png";
import me2 from "../../assets/me2.png";
import espada from "../../assets/espada.png";
import bontoc from "../../assets/bontoc.jpg";
import friends2 from "../../assets/friends2.png";
import friends3 from "../../assets/friends3.png";
import ifugao from "../../assets/ifugao.png";
import Image from "next/image";

const MoodBoard = () => {
  return (
    <div className="min-h-screen relative bg-white p-2 flex items-center justify-center">
      <div className="grid grid-cols-12 grid-rows-6 gap-4 w-full max-w-8xl  h-[800px]">
        {/* Image 1 (Left Tall) */}
        <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            src={topview}
            alt="Mood board imasdasage"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 2 (Top Middle Square) */}
        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={awasen}
            alt="Mood board image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 3 (Top Right Wide) */}
        <div className="col-span-6 row-span-2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={helicopter}
            alt="Mood board image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Image 4 (Middle Wide) */}
        <div className="col-span-6 row-span-2 rounded-2xl overflow-hidden shadow-lg relative">
          <Image
            src={espada}
            alt="Mood board image"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Image 5 (Middle Right Tall) */}
        <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={me1}
            alt="Mood board image"
            className="w-full h-full object-cover "
          />
        </div>
        {/* Image 6 (Bottom Left Wide) */}
        <div className="col-span-6 row-span-2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={ifugao}
            alt="Mood board image"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Image 7 (Bottom Middle Small) */}
        <div className="col-span-3 row-span-2 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={bontoc}
            alt="Mood board image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
