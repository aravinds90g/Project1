'use client'
import { Project3d, projects } from '@/data'
import React from 'react'
// import { AnimatedPinDemo } from './ui/Pincontainer'
import { PinContainer } from './ui/3d-pin';
// import { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { FaLocationArrow } from 'react-icons/fa';
// import Image from 'next/image';



const RecentProject = () => {
    // const [isClient, setIsClient] = useState(false);

    // useEffect(() => {
    //   setIsClient(true);
    // }, []);
  return (
    <>
      {/* <BackgroundBeams  className='mt-96'/> */}
      <div className="py-20" id="projects">
        <h1 className="text-6xl text-center font-semibold">
          A Snapshot of {""}
          <span className="text-purple">My Latest Work</span>
        </h1>
        <div className="flex  flex-wrap items-center justify-center p-7 gap-x-52 gap-y-10  gap-16 mt-32">
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] items-center justify-center sm:w-1/3 mt-36 w-[80vh]"
            >
              <div suppressHydrationWarning={true}>
                <PinContainer title={link} href={link}>
                  <div className="flex basis-full flex-col p-4 tracking-tight  text-slate-100/50 sm:basis-1/2 w-[20rem] lg:w-[30rem] h-[20rem] ">
                    <a href={link}>
                      <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                        {title}
                      </h3>
                      <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500 ">{des}</span>
                      </div>
                      <div className="flex flex-1 w-full rounded-lg mt-4">
                        <img src={img} alt={title}  />
                      </div>
                    </a>
                  </div>
                  <div className="flex mt-28 mb-3">
                    <div className="flex items-center justify-center">
                      {iconLists.map((icon) => (
                        <div
                          key={icon}
                          className=" bg-black-100 flex items-center justify-center rounded-full border-2 border-white-100/[0.2]"
                        >
                          <img
                            src={icon}
                            alt={icon}
                          />
                        </div>
                      ))}
                    </div>
                    <a href={link}>
                      <div className="flex text-purple items-center justify-center text-center lg:ml-48 ml-10 ">
                        <p>Check Live Site</p>
                        <FaLocationArrow className="ms-3" color="#c1c1c1" />
                      </div>
                    </a>
                  </div>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>

        <div className="flex  flex-wrap items-center justify-center p-7 gap-x-20 gap-y-10  gap-16">
          {Project3d.map(({id, title, des, img, iconLists, link }) => (
            <CardContainer key={id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img src={img}  alt={title} />
                </CardItem>
                <div className="flex mt-8 mb-3">
                  <CardItem translateZ={"50"}>
                    <div className="flex items-center justify-center">
                      {iconLists.map((icon) => (
                        <div
                          key={icon}
                          className=" bg-black-100 flex items-center justify-center rounded-full border-2 border-white-100/[0.2]"
                        >
                          <img
                            src={icon}
                            
                            alt={icon}
                          />
                        </div>
                      ))}
                    </div>
                  </CardItem>
                  <CardItem translateZ={"50"}>
                    <a href={link}>
                      <div className="flex text-purple items-center justify-center text-center lg:ml-36 ml-10 ">
                        <p>Check Live Site</p>
                        <FaLocationArrow className="ms-3" color="purple" />
                      </div>
                    </a>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
export default RecentProject