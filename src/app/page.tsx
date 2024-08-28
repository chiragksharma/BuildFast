import Image from "next/image";
import Hero from "@components/Hero";
import FeaturedIn from "@components/FeaturedIn";
import ProblemsComponents from "@components/Problems";
import FeaturesListicle from "@components/FeaturesListicle";
import About from "@components/About";
import Pricing from "@components/Pricing";
import FAQ from "@components/FAQ";
import CTA from "@components/CTA";

export default function Home() {
  return (
    <main className=" min-h-screen">
        <Hero />
        <FeaturedIn />
        <ProblemsComponents />
        <FeaturesListicle />
        <About />
        <Pricing />
        <FAQ/>
        <CTA />
       
    </main>
  );
}
