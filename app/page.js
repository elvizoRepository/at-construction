import Image from "next/image";
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutUs from "@/components/AboutUs";
import OurProjects from "@/components/OurProjects";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="px-4 py-4 bg-[#DEDDDC] ">
      <div className="bg-image">
        <Navbar/>
        <Hero/>
      </div>
      <AboutUs/>
      <OurProjects/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
