"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroAnimation from "@atoms/HeroAnimation";
import ButtonPrimary from "@atoms/Buttons/ButtonPrimary";
import HeroConfig from "@config/hero/hero.json";
import { ArrowRight } from 'phosphor-react';


const HeroCenter: React.FC = () => {
  const {
    heading,
    description,
    ctaText,
    ctaLink,
    highlightedText,
    smallText,
    highlightedSmallText,
    avatar_text,
    bold_avatar_text,
    images: { avatars },
    tag,
  } = HeroConfig;

  return (
    <section
      className="flex mt-16 gap-3  flex-col items-center justify-center text-center px-6 py-12 md:py-16 lg:py-24 bg-background-primary"
      id="hero"
    >
      {/* Badge/Tag Section */}
       {/* Badge/Tag Section */}
       {tag && (
        <div className="mb-4 flex items-center justify-center gap-2">
          <a
            href={tag.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="px-3 py-1 text-sm flex gap-2 items-center font-medium text-foreground-hsl bg-background-primary/55 rounded-full hover:shadow-md ring-4 ring-cards-bg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={tag.icon}
                width={20}
                height={20}
                alt="tag icon"
              />
              {tag.text}
              <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </a>
        </div>
      )}


      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        <span className="block mb-3 md:mb-5">{heading.split(highlightedText)[0]}</span>
        <span className="relative inline-block mr-2">
            <span className="relative whitespace-nowrap px-1">
            <span
                className="absolute bg-cta-color -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"
            ></span>
            <span className="relative text-foreground-opposite">{highlightedText}</span>
            </span>
        </span>
        <span>{heading.split(highlightedText)[1]}</span>
        </h1>


      {/* Subheading/Description */}
      <p className="mt-5 text-lg text-foreground-hsl/85 md:text-lg  font-medium leading-relaxed max-w-xl mx-auto">
        {description}
      </p>

      {/* CTA Buttons */}
      <div className='mt-5 space-y-4'>
                    
                    <ButtonPrimary text={ctaText} redirect={ctaLink} toolTipText="Go build something"/>
                    <p className='text-sm flex justify-center items-center gap-2 md:text-sm'>
                        {/* <Gift color="#55cc00"/> */}
                        <img src="/icons/gift-icon.svg" alt="gift icon" />
                        <span>
                            <span className='text-lime-500 text-sm'>
                                {highlightedSmallText} 
                            </span>
                        </span>
                        {smallText} 
                    </p>
                </div>

      {/* Social Proof Section */}
      <div className="mt-6 flex flex-col items-center justify-center gap-4">
        <div className="flex -space-x-3">
          {avatars.map((avatar, index) => (
            <motion.div
              key={index}
              className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
              whileHover={{ scale: 1.1 }}
            >
              <img src={avatar} alt={`Avatar ${index}`} />
            </motion.div>
          ))}
        </div>
        <p className="text-sm font-semibold">
          <strong>{bold_avatar_text}</strong> {avatar_text}
        </p>
      </div>
    </section>
  );
};

export default HeroCenter;


// <div className="mt-6 flex flex-col items-center justify-center gap-4">
// <div className="flex -space-x-3">
//   {avatars.map((avatar, index) => (
//     <motion.div
//       key={index}
//       className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
//       whileHover={{ scale: 1.1 }}
//     >
//       <img src={avatar} alt={`Avatar ${index}`} />
//     </motion.div>
//   ))}
// </div>
// <p className="text-sm text-gray-600">
//   <strong>{bold_avatar_text}</strong> {avatar_text}
// </p>
// </div>