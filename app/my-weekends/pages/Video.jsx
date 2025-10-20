import React from "react";

const Video = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-3xl rounded-lg shadow-lg object-cover"
      >
        {/* Prefer mp4 for better browser support */}
        <source src="../Kasay_BG.MOV" type="video/mp4" />
        {/* MOV may not be supported in all browsers */}
        <source src="../Kasay_BG.MOV" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
