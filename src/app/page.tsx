import Image from "next/image";
import Hero from "@components/Hero";
import FeaturedIn from "@components/FeaturedIn";

export default function Home() {
  return (
    <main className=" min-h-screen">
        <Hero />
        <FeaturedIn />
    </main>
  );
}
