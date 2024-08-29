"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import {motion} from 'framer-motion';

const Pricing: React.FC = () => {
    const { sectionId, backgroundColor, header, plans, testimonial } = siteConfig.content.pricing;

    return (
        <section className={backgroundColor} id={sectionId} >
            <div className='py-24 pb-0 px-8 max-w-5xl mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                <p className="font-medium text-primary mb-8">{header.title}</p>
                <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">{header.heading}</h2>
                <p className='text-sm md:text-base flex justify-center items-center gap-2 '>
                <span><span className="text-accent">$100 off</span> {header.offer.text}</span>
                </p>
                </div>
                <div className='relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8'>
                {plans.map((plan, index) => (
                <div key={index} 
                    className={`relative bg-gray-950  w-full rounded-xl border ${
                        plan.popular ? ' border-yellow-500' :'border-gray-800'
                    } bg-gray-950 hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-900 transition-all duration-500`
                    }                
                    >
                    {plan.badge && (
                        <div className="absolute  px-3 rounded-xl top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-yellow-500 hover:bg-yellow-800">
                            <span className="badge text-xs text-primary-content font-semibold text-black border-0 ">
                                {plan.badge.text}
                            </span>
                        </div>
                    )}
                    {plan.badge && <div className="absolute -inset-[1px] rounded-[8px] bg-primary z-10"></div>}
                    <div className='relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg'>
                        <div className='flex flex-col items-start gap-4'>
                            <motion.div
                                whileHover={{ scale: 1.05, rotate:90 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className='text-2xl'
                            >
                                🥰
                            </motion.div>
                            <div><p className="text-lg lg:text-xl font-bold ">{plan.name}</p></div>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex flex-col justify-end mb-[4px] text-lg ">
                                <p className="relative opacity-80">
                                    <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                    <span className="text-base-content">{plan.originalPrice}</span>
                                </p>
                            </div>
                            <p className="text-5xl tracking-tight font-extrabold">{plan.discountedPrice}</p>
                            <div className="flex flex-col justify-end mb-[4px]">
                                <p className="text-xs opacity-60 uppercase font-semibold">{plan.currency}</p>
                            </div>
                        </div>
                        <ul className='space-y-2.5 leading-relaxed text-base flex-1'>
                            {plan.features.map((feature, i) => (
                                <li key={i} className='flex items-center gap-2'>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <div className='space-y-2'>
                            <button className='btn btn-primary group btn-block'>
                                {plan.buttonText}
                            </button>
                            <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                                {plan.note}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
                </div>

            <div className='space-y-4 mx-auto max-w-md mt-24'>
                <p className="md:text-lg leading-relaxed">{testimonial.text}</p>
                <div className='flex items-center gap-2'>
                <p>{testimonial.author}</p>
                <span className="badge badge-accent badge-outline">{testimonial.badge}</span>

            </div>
            </div>
            </div>

        </section>
    );
};

export default Pricing;