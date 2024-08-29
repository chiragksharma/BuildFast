"use client"
import React, { useRef, useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import { motion, useScroll, useTransform } from 'framer-motion';


const CTA: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:targetRef,
        offset: ["start end","end start"],
    }
    );
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);


    return (
        <motion.section
            ref = {targetRef}
            className='bg-base mt-7 mb-10'
            style={{opacity}}
        >
            <div 
                className='bg-gradient-to-r from-black to-slate-900 pb-24 pt-16 px-8 max-w-sm md:max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 border border-gray-400 rounded-3xl'>
                <div className='text-center'>
                <h2 className="relative font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">Boost your app, launch, earn</h2>
                <p className="relative text-lg text-base-content/80">Don't waste time on Stripe subscriptions or designing a pricing section...</p>
                </div>
                <button className='btn btn-primary group btn-wide text-black font-bold plausible-event-name=Checkout' title='Go to BuildFast Chekout'>
                        <img src="/brand_logo_black.svg" alt="brand_logo_black" className='w-6 h-6 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' />
                        Get BuildFast
                </button>
                
            </div>
        </motion.section>
    );
};

export default CTA;