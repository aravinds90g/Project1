import { i, style, svg } from "framer-motion/client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Passionate about IoT, scalable web apps, and cloud-driven solutions for real-world impact.",
    description: "",
    className: "lg:col-span-1 row-span-2",
    imgClassName: "w-full  h-full ",
    titleClassName:
      "justify-end text-xs group-hover/bento:translate-x-2 transition duration-200 relative",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I specialize in creating seamless, innovative solutions at the intersection of IoT, web development, and cloud technologies. With a strong background in the MERN stack and a passion for building scalable, secure applications, I am committed to solving real-world challenges with cutting-edge technology",
    description: "",
    className:
      "lg:col-span-2 lg:row-span-2 md:col-span-6 md:row-span-3 lg:min-h-[60vh] ",
    imgClassName: "ml-48",
    titleClassName:
      "justify-start group-hover/bento:translate-x-2 transition duration-200 relative  w-full",
    img: "/22.jpg",
    style: { width: "900px", hight: "900px" },
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-center group-hover/bento:translate-x-2 transition duration-200 relative",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Skilled in building scalable web applications and leveraging cloud technologies for impactful solutions.",
    description: "",
    className: "lg:col-span-1  md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName:
      "justify-start group-hover/bento:translate-x-2 transition duration-200 relative",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Building a JS Full-Stack Projects",
    description: "The Inside Scoop",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center group-hover/bento:translate-x-2 transition duration-200 relative",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center  text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "Internship at Grantley Edutech in Azure Cloud Solutions.",
    description: "Experience In",
    className: "md:col-span-2 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center group-hover/bento:translate-x-2 transition duration-200 relative",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "ChatBot",
    des: "An intelligent chatbot website with seamless user interaction, built using the MERN stack for real-time communication and advanced functionality.",
    img: "img4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/py.svg"],
    link: "https://github.com/aravinds90g/ChatBot",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "A React Native project for building cross-platform mobile applications with seamless UI, robust features, and performant functionality.",
    img: "/img5.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/Appwrite1.svg"],
    link: "https://github.com/aravinds90g/app",
  },
];


export const Project3d = [
  {
    id: 1,
    title: "Mini-Amazon: E-Commerce Platform",
    des: "A MERN stack e-commerce app with user authentication, product browsing, cart management, and secure checkout.",
    img: "/project1.png",
    iconLists: ["/re.svg", "/Nodejs.svg", "/Bootstrap.svg", "/Mongodb.svg"],
    link: "https://github.com/aravinds90g/mini-amazon",
  },
  {
    id: 2,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/project2.png",
    iconLists: ["/next.svg", "/tail.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/aravinds90g/applewebsite",
  },
];

export const testimonial = [
  {
    id: 1,
    name: "/svgs/appwriteio-ar21.svg",
  },

  {
    id: 2,
    name: "/svgs/amazon_aws-ar21.svg",
  },

  {
    id: 4,
    name: "/svgs/mongodb-ar21.svg",
  },
  {
    id: 5,
    name: "/svgs/nextjs-ar21.svg",
  },
  {
    id: 6,
    name: "/svgs/nodejs-ar21.svg",
  },
  {
    id: 7,
    name: "/svgs/docker-ar21.svg",
  },
  {
    id: 6,
    name: "/svgs/javascript-ar21.svg",
  },
  {
    id: 7,
    name: "/svgs/reactjs-ar21.svg",
  },
  {
    id: 8,
    name: "/svgs/getbootstrap-ar21.svg",
  },
  {
    id: 9,
    name: "/svgs/microsoft_azure-ar21.svg",
  },
  {
    id: 10,
    name: "/svgs/github-ar21.svg",
  },
  {
    id: 11,
    name: "/svgs/c-programming.svg",
  },
];

export const testimonial1 = [
  {
    id: 1,
    name: "/svgs/tailwindcss-ar21.svg",
  },

  {
    id: 2,
    name: "/svgs/netlify-ar21.svg",
  },

  {
    id: 4,
    name: "/svgs/typescriptlang-ar21.svg",
  },
  {
    id: 5,
    name: "/svgs/python-ar21.svg",
  },
  {
    id: 6,
    name: "/svgs/w3_html5-ar21.svg",
  },
  {
    id: 7,
    name: "/svgs/expressjs-ar21.svg",
  },
  {
    id: 8,
    name: "/svgs/npmjs-ar21.svg",
  },
  {
    id: 9,
    name: "/svgs/netlifyapp_watercss-ar21.svg",
  },
  {
    id: 10,
    name: "/svgs/arduino-ar21.svg",
  },
  {
    id: 11,
    name: "/svgs/sentryio-ar21.svg",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer",
    desc: "Proficient in building scalable web applications with MongoDB, Express.js, React.js, and Node.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend and Mobile Specialist",
    desc: "Experienced in crafting dynamic UIs, animations with React.js, Three.js, GSAP, and building cross-platform mobile apps with React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "IoT Solutions Developer",
    desc: "Skilled in creating secure and innovative IoT solutions using Azure IoT Hub, AWS, and cloud technologies.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Cloud and IoT Innovator",
    desc: "Combining cloud, AIML, IoT, Edge Computing, and React Native to develop cutting-edge solutions for real-world problems.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aravind-s-90g/",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://github.com/aravinds90g?tab=repositories",
  },
];
