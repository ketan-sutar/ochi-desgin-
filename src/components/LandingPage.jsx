import React from "react";
import { FaArrowUp } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className="h-screen w-full pt-1">
      <div className="text-structure mt-40 px-20">
        {["WE create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker ">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <div className=" mr-[1vw] w-[8vw] h-[5.4vw] relative rounded-md -top-[0.8vw] bg-red-500"></div>
                )}
                <h1 className='pt-[2vw] -mb-[1vw] uppercase leading-[6vw] tracking-light font-medium  text-[8.5vw] font-["Founders_Grotesk_X"] '>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] mt-32 border-zinc-800 py-5 px-20 flex justify-between items-center">
        {[
          "for public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-4 py-2 border-[2px] font-light text-sm capitalize border-zinc-400 rounded-full">
            Start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full">
            <span className=" rotate-[45deg]">
              <FaArrowUp className="text-zinc-600" />
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
