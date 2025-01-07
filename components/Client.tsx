import React from 'react'
import { InfiniteMovingCards } from './ui/MovingCards';
import {  testimonial, testimonial1,  } from '@/data';

const Client = () => {
  return (
    <div className="py-4 mt-0 relative" id="projects">
      <h1 className="text-6xl text-center mb-10 font-semibold">
        Tech Stacks I{`'`}m {""}
        <span className="text-purple">Exploring</span>
      </h1>
      <div className="flex flex-col items-center justify-center  ">
        <div className="h-[40rem] relative rounded-md gap-20 flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
          <InfiniteMovingCards
            items={testimonial}
            direction="right"
            speed="normal"
            className="bottom-0"
          />
          <InfiniteMovingCards
            items={testimonial1}
            direction="left"
            speed="normal"
            className="bottom-0"
          />
        </div>

        {/* <div className='flex flex-wrap items-center justify-center gap-4'>
          {companies.map(({id,img,name,nameImg})=>(
            <div key={id} className='flex'>
              <img src={img} alt={name} />
              <img src={nameImg} alt={name} className='ml-4' />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Client