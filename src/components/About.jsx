import React from "react";

const About = () => {
  return (
    <div className="w-full p-20  bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl ">
      <h1 className=" font-['Neue_Montreal '] text-[4.5vw] tracking-tighter leading-[4.5vw] ">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20 ">
        <div className="w-1/2 ">
          <h1 className="text-5xl font-['NeueMontreal '] ">Our Approach:</h1>
          <button className="px-10 py-3.5 flex items-center gap-8 mt-10 bg-zinc-900 text-white rounded-full">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#556322]"></div>
      </div>
    </div>
  );
};

export default About;
