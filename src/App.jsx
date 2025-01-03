import { Navbar } from "./components/Navbar"
import { Highlight } from "./components/Highlight"
import {Hero } from "./components/Hero"
import Model from "./components/Model";
import Features from "./components/Features";
import HowitWorks from "./components/HowitWorks";
import Footer from "./components/Footer";
function App() {

  return (
    <>
      <main className="bg-black">
        <Navbar />
        <Hero />
        <Highlight />
        <Model />
        <Features />
        <HowitWorks />
        <Footer />
      </main>
    </>
  );
}

export default App
