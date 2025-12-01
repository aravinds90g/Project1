'use client'
import { Project3d } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { FaLocationArrow } from 'react-icons/fa';
import { autiowide } from '@/app/fonts';

const RecentProject = () => {
  return (
    <>
      <div className="relative py-20" id="projects">
        {/* Cyan Grid Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e9_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
        </div>

        <h1 className={`text-6xl glow-text text-center font-semibold ${autiowide.className} relative z-10`}>
          A Snapshot of {""}
          <span className='text-cyan-50 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]'>My Latest Work</span>
        </h1>
      
        <div className="flex flex-wrap items-center justify-center p-7 gap-x-20 gap-y-10 gap-16 relative z-10">
          {Project3d.map(({id, title, des, img, iconLists, link }) => (
            <CardContainer key={id} className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
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
                  <img src={img} alt={title} />
                </CardItem>
                <div className="flex mt-8 mb-3">
                  <CardItem translateZ={"50"}>
                    <div className="flex items-center justify-center">
                      {iconLists.map((icon) => (
                        <div
                          key={icon}
                          className="bg-black-100 flex items-center justify-center rounded-full border-2 border-white-100/[0.2]"
                        >
                          <img src={icon} alt={icon} />
                        </div>
                      ))}
                    </div>
                  </CardItem>
                  <CardItem translateZ={"50"}>
                    <a href={link}>
                      <div className="flex text-cyan-500 items-center justify-center text-center lg:ml-36 ml-10">
                        <p>Check it out</p>
                        <FaLocationArrow className="ms-3" />
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