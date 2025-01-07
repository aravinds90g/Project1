// import { footer } from 'framer-motion/client'
import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
// import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" className="h-full w-full opacity-75" />
      </div>
      <div className="py-4 mb-10 flex flex-col">
        <h1 className="text-6xl text-center mb-0 font-semibold">
          Ready to take {""}
          <span className="text-purple">your digital presence</span> to next
          level?
        </h1>
        <p className="text-xl mt-10 mb-8 text-center ">
          Reach out to me today let&apos;s discuss how I can help you to achive
          your goals
        </p>
        <a href="mailto:aravinds90g@gmail.com">
          <MagicButton
            title={`let's get in touch`}
            icon={<FaLocationArrow />}
            position={`right`}
          />
        </a>
      </div>
      <div className="flex md:flex-row flex-col mb-9 justify-between items-center">
        <p>Copyright © 2024 Aravind</p>
        <div className="flex gap-6 items-center justify-center">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer mt-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={item.link}  >
                <img
                src={item.img}
                alt="img"
                style={{ width: "20px", height: "20px" }}
                />
               </a>
            </div>
          ))}
        </div>
      </div><hr></hr>
    </footer>
  );
}
export default Footer;
