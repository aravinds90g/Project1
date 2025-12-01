// import Image from "next/image";
"use client";
// import Approch from "";
import dynamic from "next/dynamic";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
// import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";

const Approch = dynamic(() => import("@/components/Approch"), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="relative w-full bg-black flex justify-center items-center flex-col overflow-hidden">
      <div className="w-full">
        <Hero />
        <About />
        <RecentProject />
        <Client />
        <Experience />
        <Approch />
        <Footer />
      </div>
    </main>
  )
}
