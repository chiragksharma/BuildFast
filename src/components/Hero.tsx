"use client";
import React from 'react';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
                <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 className="text-4xl font-extrabold lg:text-6xl tracking-tight md:mb-4 flex flex-col gap-3 items-center lg:items-start">
                        Build your Landing page in <span className="relative inline-block">
                        <span className='relative whitespace-nowrap'>
                            hours, 
                            </span>
                            , 
                            <span className='relative whitespace-nowrap'>
                            <span className="absolute bg-yellow-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                            <span className="relative text-yellow-950">not days</span>
                            </span>
                    </span>
                        
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">The NextJS boilerplate with all you need to build your SaaS product Landing page. Super easy to customize. </p>
                <div className='space-y-4'>
                    <button className='btn btn-primary group btn-wide text-base font-bold plausible-event-name=Checkout' title='Go to BuildFast Chekout'>
                        <img src="/brand_logo_black.svg" alt="brand_logo_black" className='w-6 h-6 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' />
                        Get Started
                    </button>
                    <p className='text-sm flex justify-center items-center gap-2 md:text-sm'>
                        {/* <Gift color="#55cc00"/> */}
                        <img src="/icons/gift-icon.svg" alt="gift icon" />
                        <span>
                            <span className='text-accent text-sm'>
                                FREE 
                            </span>
                        </span>
                        for the first 1000 customers 
                    </p>
                </div>
                <div className='flex flex-col md:flex-row justify-center align-center gap-3'>
                    <div className='-space-x-5 avatar-group justify-start overflow-hidden rounded-full '>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_1.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_2.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_3.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_4.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_5.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                            <div className='avatar w-12 h-12 relative inline-flex'>
                                <img src="/avatars/avatar_6.png" fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}} alt="avatar 1" />
                            </div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:items-start gap-1'>
                        <div className='relative inline-flex gap-1'>
                            <motion.img src="/icons/star-filled.svg" alt="star-filled"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                            <motion.img src="/icons/star-filled.svg" alt="star-filled"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            
                            />
                            <motion.img src="/icons/star-filled.svg" alt="star-filled"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />  
                            <motion.img src="/icons/star-filled.svg" alt="star-filled" 
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                            <motion.img src="/icons/star-filled.svg" alt="star-filled"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            />
                        </div>
                        <div className='text-base '>
                            <span className='font-semibold text-base'>100 </span>
                            maker's build faster
                        </div>
                    </div>
                </div>

                </div>
                
                <div className="relative max-md:-m-4 lg:w-full -mt-24">
                    <img src="/Hero_image.png" alt="Hero Image" className="w-full h-auto " style={{color:'transparent'}} />
                </div>
            </div>
        </div>
    );
};

export default Hero;