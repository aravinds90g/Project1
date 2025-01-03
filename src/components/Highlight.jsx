import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { rightImg ,watchImg } from '../utils'
import { Videocaroul } from './Videocaroul'

export const Highlight = () => {
 
   useGSAP(()=>{
     gsap.to('#title',{
      opacity:1,
      delay:2.1,
      ease:"back.out",
      y:0
     })
     gsap.to('.link',{
      opacity:1,
      y:0,
      delay: 2.2,
      duration:1,
      stagger:.50
     })
   },[])

  return (
    <section
      id="hightlight"
      className="w-screen h-full overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get The Highlight.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the flim
              <img src={watchImg} alt="watch" className='ml-2'/>
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} alt="watch" className='ml-2' />
            </p>
          </div>
        </div>
        <Videocaroul />
      </div>
    </section>
  );
}
