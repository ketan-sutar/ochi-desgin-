import React from "react";

const Features = () => {
  return (
    <div className="w-full py-20 relative">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-14">
        <h1 className='text-6xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10 relative overflow-hidden">
          <div className="card-container relative w-1/2 h-[75vh] rounded-xl ">
          <h1 className="absolute text-[#004D43] z-[9] text-8xl tracking-tighter font-semibold leading-none left-full top-1/2  -translate-x-1/2 -translate-y-1/2">
            FYDE
          </h1>
            <div className="card w-full h-full rounded-xl">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div className="card-container  w-1/2 h-[75vh] rounded-xl  relative">
          <h1 className="absolute text-[#004D43] z-[9] text-8xl tracking-tighter font-semibold leading-none right-full top-1/2  translate-x-1/2 -translate-y-1/2">
            {"VISE".split('').map((item,index)=><span className="">{item}</span>)}
          </h1>
            <div className="card w-full h-full rounded-xl">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
