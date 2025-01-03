import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import { smallHeroVideo ,heroVideo } from '../utils'


export const Hero = () => {
  
const [videoSrc,setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
   
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });
    gsap.to('#cta',{
      opacity:1,
      delay:2,
      y:-50
    })
  }, []);

   const handelVideoSrcSet = () =>{
    if(window.innerWidth < 760){
      setVideoSrc(smallHeroVideo)
    }
    else{
      setVideoSrc(heroVideo)
    }
   }
    
   useEffect(()=>{
     window.addEventListener('resize',handelVideoSrcSet);
     return () =>{
      window.addEventListener('resize',handelVideoSrcSet)
     }
   },[])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='w-full h-5/6  flex-center flex-col '>
       <p id='hero' className='hero-title'>iphone 15 pro</p>

       <div className='md:w-10/12 w-9/12'>
         <video autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type='video/mp4' />
         </video>
       </div>
      </div>
      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20 '>
        <a href="#highlight" className='btn'>Buy</a>
        <p className='font-normal text-xl'>Form $199 for month or $999</p>
      </div>
    </section>
  )
}
