"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GrideGlobe";
import { useState } from "react";
import animationData from "@/data/conffite.json"
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImge,
  style,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImge?: string;
  style?: React.CSSProperties;
}) => {

const [copied, setCopied] = useState(false);

const handleCopy = () => {
 console.log('Eamil')
 navigator.clipboard.writeText('aravinds90g@gmail.com');
 setCopied(true)
};
  
  
  
   return (
     <div
       className={cn(
         "row-span-1 rounded-xl w-full relative overflow-hidden group/bento transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
         className
       )}
     >
       <div
         className={`${id === 3 ? "flex justify-center" : ""} ${
           id === 6 && "text-center justify-center"
         } justify-center`}
       >
         <div className="w-full h-full absolute">
           {img && (
             <img
               src={img}
               style={style}
               alt={img}
               className={cn(imgClassName, "object-cover object-center")}
             />
           )}
         </div>
         <div
           className={`absolute w-full right-0 -bottom-5 ${
             id === 2 ? "w-full  opacity-10" : ""
           }`}
         >
           {spareImge && (
             <img
               src={spareImge}
               alt={spareImge}
               className="object-center object-cover w-full h-full"
             />
           )}
         </div>

         {id === 1 && (
           <div className="-z-50">
             <GlobeDemo />
           </div>
         )}

         <div
           className={cn(
             titleClassName,
             "flex flex-col w-full  md:h-full min-h-40 px-5 p-5 lg:p-10"
           )}
         >
           <div className="font-sans w-full  font-extralight text-[#616975]  md:text-xs lg:text-base z-10">
             {description}
           </div>
           <div
             className={`font-sans hover:text-purple w-full text-gray-400 font-bold ${
               id === 1 ? `lg:text-1xl text-gray-400 font-semibold ` : ""
             } ${id === 2 ? `lg:text-1xl  font-semibold` : ""} ${
               id === 6 ? `lg:text-1xl text-gray-100  font-semibold` : ""
             } lg:text-3xl max-w-96 z-10`}
           >
             {title}
           </div>
         </div>

         {id === 3 && (
           <div className="flex gap-1 -right-3 lg:-right-2">
             <div className="flex lg:ml-56 flex-col gap-3 lg:gap-8">
               {["React.js", "Next.js", "TypeScript"].map((item) => (
                 <span
                   key={item}
                   className="py-2 lg:py-4 lg:px-3 opacity-50 text-sm lg:text-background lg:opacity-100 rounded-xl bg-[#10132E] text-center"
                 >
                   {item}
                 </span>
               ))}
               <span className="lg:py-4 lg:px-3 py-4 rounded-xl text-center bg-[#10132E]" />
             </div>

             <div className="flex ml-5 flex-col gap-3 lg:gap-8">
               <span className="lg:py-4 lg:px-3 py-4 rounded-xl text-center bg-[#10132E]" />
               {["Node.js", "G-Sap", "Mongodb"].map((item) => (
                 <span
                   key={item}
                   className="py-2 lg:py-4 lg:px-3 opacity-50 text-sm lg:text-background lg:opacity-100 rounded-xl bg-[#10132E] text-center"
                 >
                   {item}
                 </span>
               ))}
             </div>
           </div>
         )}

         {id === 6 && (
           <>
             <BackgroundGradientAnimation>
               {/* <div className="absolute z-50 justify-center flex items-center text-white-100 font-bold" /> */}
             </BackgroundGradientAnimation>
           </>
         )}

         {id === 6 && (
           <div className="sm:relative lg:absolute">
             <div className={`-bottom-5 -left-5 absolute`}>
               <Lottie
                 options={{
                   loop: copied,
                   autoplay: copied,
                   animationData: animationData,
                   rendererSettings: {
                     preserveAspectRatio: "xMidYMid slice",
                   },
                 }}
               />
             </div>
             <div className="mb-10 lg:-top-2  lg:pl-24 md:pl-20 text-center justify-center">
               <MagicButton
                 title={copied ? "Email Copied" : "Copy My Email"}
                 icon={<IoCopyOutline />}
                 position={"left"}
                 handleClick={handleCopy}
                 otherClasses={``}
               />
             </div>
           </div>
         )}
       </div>
     </div>
   );
};
