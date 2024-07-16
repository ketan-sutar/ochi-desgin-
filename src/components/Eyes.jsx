import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate,setRotate]=useState(0)

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      // console.log(e.clientX,e.clientY)
      let mouseX=e.clientX;
      let mouseY=e.clientY;
      
      let deltaX=mouseX-window.innerWidth/2;
      let deltaY=mouseY-window.innerHeight/2;

      var angle=Math.atan2(deltaY,deltaX)*(180/Math.PI);
      setRotate(angle-180);





    })
  })



  return (
    <div className="eyes w-full h-screen overflow-hidden relative">
      <div className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
        <div className="eyediv flex gap-10  absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center ">
              <div  style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className=" line  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7  ">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className=" relative w-2/3 h-2/3 bg-zinc-900 rounded-full flex items-center justify-center ">
            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className=" line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7 ">
                <div className="w-7 h-7 bg-zinc-100 rounded-full"></div>
              </div>            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
