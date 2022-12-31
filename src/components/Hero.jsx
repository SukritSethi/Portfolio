import React from 'react';
import linkedin from '../assets/media/linkedin.png';
import medium from '../assets/media/medium.png';
import behance from '../assets/media/behance.png';

const Hero = () => {
  return (
    <div className=' h-98 pt-28 p-10 pl-16'>
      <div className=" text-pink-main text-2xl">Hello, <span className='text-green-main'>I'm</span></div>
      <div className=" text-green-main text-9xl">Sukrit Sethi</div>
      <div className=" text-pink-main text-2xl">a <span className='text-rose-maon'>full stack</span> web developer driven by creativity, fueled by caffeine</div>
      <div className=" text-peach-main py-2 w-120">Currently diving deeper into <span className='text-pink-main'>frontend</span>, developing question solving abilities using several <span className='text-pink-main'>Data Structures and Algorithms</span> in <span className='text-pink-main'>C++</span>, building <span className='text-green-main'>Rit-Man</span> and learning several complimentary skills such as <span className='text-pink-main'>AI/ML, DevOps</span> and <span className='text-pink-main'>Computer Networks</span></div>
      
      <div className=" flex mt-10">
        <div className=" text-3xl text-rose-main pt-1">My Presence: </div>
        <div className="ml-5 flex ">
            <img src={linkedin}  className="h-12 mx-2 cursor-pointer hover:scale-125 transition ease-in-out duration-300" alt="" />
            <img src={medium}  className="h-12 mx-2 cursor-pointer hover:scale-125 transition ease-in-out duration-300" alt="" />
            <img src={behance}  className="h-12 mx-2 cursor-pointer hover:scale-125 transition ease-in-out duration-300" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
