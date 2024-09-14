"use client"
import React, { useRef, useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import { motion, useScroll, useTransform } from 'framer-motion';
import ButtonPrimary from '@atoms/Buttons/ButtonPrimary';

const CTA: React.FC = () => {
    const targetRef = useRef<HTMLDivElement>(null);
    


    return (
        <motion.section
            ref = {targetRef}
            className='bg-background-secondary pt-7 pb-5'
        >
            <div 
                className='bg-cards-bg-secondary pb-24 pt-16 px-8 max-w-sm md:max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 border border-gray-400 rounded-3xl'>
                <div className='text-center'>
                <h2 className="relative font-bold text-3xl md:text-5xl tracking-tight mt-4 mb-4 md:mb-8 ">Boost your app, launch, earn</h2>
                <p className="relative text-lg text-base-content/80">Don't waste time on Stripe subscriptions or designing a pricing section...</p>
                </div>
               <div className='w-1/3 flex items-center'>
                <ButtonPrimary text='Get BuildFast' toolTipText="Go build something"/>
               </div>
                
            </div>
        </motion.section>
    );
};

export default CTA;