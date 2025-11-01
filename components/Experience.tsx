import React from 'react'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'
// import Image from 'next/image';


const Experience = () => {
  return (
    <div className="py-4 mt-20" id="projects">
      <h1 className="text-6xl text-center mb-10 font-semibold">
        Work {""}
        <span className="text-purple">Highlights</span>
      </h1>
      <div className="h-screen w-full dark:bg-black bg-white absolute dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="w-full items-center justify-center  lg:ml-20 mt-20 gap-20 grid lg:grid-cols-2">
        {workExperience.map((card) => (
          <Button className="" duration={7000} key={card.id}>
            <div className="p-3 w-full ">
              <div>
                <img
                  className="pl-3 mt-1"
                  src={card.thumbnail}
                  alt={card.title}
                  
                />
              </div>
              <h1 className="text-start text-xl px-4 mt-3 font-bold flex-col ">
                {card.title}
              </h1>
              <p className="text-start  text-md px-4 mt-3  font-extralight">
                {card.desc}
              </p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Experience