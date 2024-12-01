import React from "react";
import { motion } from "framer-motion";
import featuredInConfig from "@config/Featured/featured.json";

interface MarqueeFeaturedInProps {
  speed?: number; // Speed in seconds (default: 10)
}

const MarqueeFeaturedIn: React.FC<MarqueeFeaturedInProps> = ({ speed = 10 }) => {
  const { logos } = featuredInConfig;

  return (
    <section
      className="relative overflow-hidden py-6 md:py-8 flex flex-col items-center mb-5 justify-center gap-4 md:gap-5 mx-auto max-w-sm md:max-w-2xl"
      id="featuredIn"
    >
      <h2 className="text-lg font-semibold opacity-80 text-center">
        Featured In
      </h2>

      <div className="slider-wrapper relative w-full overflow-hidden items-center h-16 md:h-14">
        <motion.div
          className="slider flex flex-row gap-10 md:gap-20 items-center h-full"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: speed, // Dynamic speed based on the prop
            ease: "linear",
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <a
                key={index}
                href={logo.link}
                title={logo.title}
                className="flex flex-row items-center gap-2 group"
            >
                {logo.src || logo.src.trim() !== "" ? ( // Check if the image source exists
                <img
                    src={logo.src}
                    alt={logo.alt || logo.title} // Use alt fallback if provided
                    title={logo.title}
                    className="w-3 md:w-3 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                ) : null}
                <span className="text-lg font-medium text-foreground-hsl/65 group-hover:text-foreground-hsl transition-opacity duration-500 text-nowrap">
                {logo.title}
                </span>
            </a>
            ))}

        </motion.div>

        {/* Improved Blur Effect */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-background-primary to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-background-primary to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default MarqueeFeaturedIn;
