"use client";
import Image from "next/image";
import Hero from "@components/Hero";
import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import FeaturedIn from "@components/FeaturedIn";
import ProblemsComponents from "@components/Problems";
import FeaturesListicle from "@components/FeaturesListicle";
import About from "@components/About";
import Pricing from "@components/Pricing";
import FAQ from "@components/FAQ";
import CTA from "@components/CTA";
import Testimonials11 from "@components/TestinomialGrid";

export default function Home() {
 

  return (
    <main className=" min-h-screen bg-gradient-theme">
        <Hero />
        <FeaturedIn />
        <ProblemsComponents />
        <FeaturesListicle />
        <About />
        <Pricing />
        <Testimonials11 />
        <FAQ/> 
        <CTA />
       
    </main>
  );
}
