"use client"
import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from '@config/siteConfig.json';



const FeaturedIn: React.FC = () => {
    const { logos } = siteConfig.content.featured;

    return (
        <section className='p-8 md:p-12 flex flex-wrap items-center justify-center gap-4 md:gap-8'>
            <span className="text-xs text-[10px] opacity-50">Featured on</span>
            {logos.map((logo, index) => (
                <motion.a
                key={index}
                href={logo.link}
                title={`featured in ${logo.title}`}
                whileHover={{ scale: 1.1 }}
                className="featured-logo flex flex-col items-center gap-2 group"
                >
                <img
                    src={logo.src}
                    width={30}
                    height={30}
                    alt={logo.alt}
                    title={logo.title}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <span className="logo-title text-xs font-thin">{logo.title}</span>
                </motion.a>
            ))}
                {/* <span className="logo-title text-xs font-thin">Product Hunt</span> */}
        </section>
    );
};

export default FeaturedIn;