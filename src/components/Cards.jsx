import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen px-20 flex items-center gap-5'>
        <div className="cardcontainer w-1/2 h-[60vh] ">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className='w-32 ' />
            <button className='absolute left-10 bottom-7 text-[#CDEA68] px-4 py-2 border-2 rounded-full border-[#CDEA68]'>&copy; 2019-2022</button>
        </div>
            
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[60vh] ">
        <div className="card w-1/2 rounded-xl h-full bg-[#212121]  flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" /></div>
        <div className="card w-1/2 rounded-xl h-full bg-[#212121]  flex justify-center items-center">
        <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" /></div>

        </div>

    </div>
  )
}

export default Cards