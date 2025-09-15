import React from "react";
import biglagoon from "../../assets/biglagoon.jpg";

const Voyage = () => {
  return (
    <div className="h-screen bg-white p-4 sm:p-8">
      <div
        className="rounded-3xl relative overflow-hidden flex items-center justify-center h-full"
        style={{
          backgroundImage: `url(${biglagoon.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="text-center">
          {/* <p className="text-2xl sm:text-3xl md:text-2xl lg:text-2xl z-2 font-bold text-white oranienbaum drop-shadow-2xl">
            That's why..
          </p> */}
          <div className="select-none flex gap-2 sm:gap-10 md:gap-10 lg:gap-10 text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] italic z-2 font-bold text-white gfs-didot drop-shadow-2xl text-center px-4">
            Voyage{" "}
            <span className="tracking-[-0.1em] underline gfs-didot">Prvlg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voyage;
