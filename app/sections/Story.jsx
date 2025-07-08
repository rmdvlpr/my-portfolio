"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import intern from "../assets/intern.jpeg";
import cert from "../assets/cert.jpg";
import phone from "../assets/phone.jpg";

const StoryData = [
  {
    date: "02/11/2023",
    image: intern,
    content: (
      <>
        This is my first time residing in Manila, and I'm excited to begin a new
        chapter here. This day marks my first day as an intern at{" "}
        <span className="font-bold">AIQUE Innovation Technology Corp.</span> I
        joined the company with only basic knowledge of HTML, CSS, and
        JavaScript. My Senior Developer gave me the opportunity to learn more
        about React, allowing me enough time to study its fundamentals — and I'm
        eager to keep learning. My first task was to create a replica of the
        Netflix website using the skills I acquired within the given timeframe.
        I successfully built the replica — it's not perfect, but it's the best I
        could do at this stage.
      </>
    ),
  },
  {
    date: "05/29/2023",
    image: cert,
    content: (
      <>
        This day marks my last day as an intern at{" "}
        <span className="font-bold">AIQUE Innovation Technology Corp.</span> I'm
        truly grateful for the opportunity to learn and grow within this
        company, and I'm excited to continue my learning journey in the future.
        On the other hand, this also marks my first day as a full-time Frontend
        Developer at <span className="font-bold">WalkThePlanet</span>, a client
        of AIQUE Innovation Technology Corp. I was absorbed into their team
        through the recommendation of my Senior Developer, as well as other
        C-level executives at AIQUE.
      </>
    ),
  },
  {
    date: "02/29/2024",
    image: phone,
    content: (
      <>
        A year has passed since I started my journey as a Frontend Developer.
        I've learned so much about React and have become more confident in my
        ability to create responsive and dynamic web applications. My first
        project was a booking engine for a startup called{" "}
        <span className="font-bold">GalaGo</span>. Today, I've officially
        started working as a Mobile Developer using React Native for the GalaGo
        mobile app. This phone serves as a test device for my mobile development
        work.
      </>
    ),
  },
];

const Story = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < StoryData.length - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="h-screen bg-[#07100B] flex gap-5 p-20 justify-between">
      <div className="flex justify-between flex-col items-start gap-5">
        <p className="poppins font-extrabold text-3xl text-white">MY STORY</p>

        <div className="text-white max-w-[600px] h-[400px] flex flex-col gap-4">
          {/* Date with nav buttons */}
          <div className="flex items-center justify-between">
            <p className="poppins font-extrabold text-3xl">
              {StoryData[index].date}
            </p>
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={index === 0}
                className="hover:text-gray-300 disabled:opacity-30"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={handleNext}
                disabled={index === StoryData.length - 1}
                className="hover:text-gray-300 disabled:opacity-30"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Story content */}
          <p className="text-xl leading-relaxed">{StoryData[index].content}</p>
        </div>
      </div>
      <div className="image-container flex items-end max-h-screen ">
        <Image
          src={StoryData[index].image}
          width={400}
          height={400}
          alt="phone"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Story;
