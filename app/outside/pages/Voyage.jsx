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

        <p className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl italic z-2 font-bold text-white syne drop-shadow-2xl text-center px-4">
          Voyage Prvlg
        </p>
      </div>
    </div>
  );
};

export default Voyage;
