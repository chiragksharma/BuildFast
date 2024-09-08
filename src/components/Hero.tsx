"use client";
import React from 'react';
import { motion } from 'framer-motion';
import siteConfig from '@config/siteConfig.json';
import { RocketLaunch } from 'phosphor-react';
import HeroAnimation from './atoms/HeroAnimation';

const Hero: React.FC = () => {
    const { hero } = siteConfig.content;
    const { theme } = siteConfig;
    const { heading, description, ctaText, ctaLink,highlightedText,smallText,highlightedSmallText,avatar_text,bold_avatar_text } = hero;
    const {heroImage,avatars} = hero.images;

    // const parts = heading.split(new RegExp(`(${highlightedText})`, 'gi'));

    const words = heading.split(' ');
    const thirdLastWord = words[words.length - 3];
    const lastTwoWords = words.slice(-2).join(' ');
    const mainPart = words.slice(0, -3).join(' ');




    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-16 h-auto">
                <div className="flex flex-col gap-10 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 className="text-4xl font-extrabold lg:text-6xl tracking-tight md:mb-1 flex flex-col gap-3 items-center lg:items-start">
                        {/* Build your Landing page in <span className="relative inline-block">
                        <span className='relative whitespace-nowrap'>
                            hours, 
                            </span>
                            , 
                            <span className='relative whitespace-nowrap'>
                            <span className="absolute bg-yellow-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                            <span className="relative text-yellow-950">not days</span>
                            </span>
                    </span> */}

                    {/* {parts.map((part, index) => (
                            <span key={index} className="relative inline-block">
                                {part.toLowerCase() === highlightedText.toLowerCase() ? (
                                    <span className='relative whitespace-nowrap '>
                                        <span className={`absolute bg-yellow-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1`}></span>
                                        <span className={`relative text-yellow-950`}>{part}</span>
                                    </span>
                                ) : (
                                    <span>{part}</span>
                                )}
                            </span>
                    ))} */}
                    {mainPart} <span className="relative inline-block">
                        <span className="relative whitespace-nowrap">
                            {thirdLastWord}
                            </span>
                            <span className='relative whitespace-nowrap ml-4'>
                            <span className={'bg-cta-color absolute -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1'}
                            ></span>
                            <span className={'relative text-foreground-opposite'}
                            >{lastTwoWords}</span>
                            </span>
                        </span>

                        
                </h1>
                <p className="text-lg font-medium leading-relaxed">{description}</p>
                <div className='space-y-4 w-3/4'>
                    <button className='btn btn-primary w-full bg-cta-color text-foreground-opposite group text-xl font-extrabold' title='Go to BuildFast Chekout'>
                        {/* <img src="/brand_logo_black.svg" alt="brand_logo_black" className='w-7 h-7 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' /> */}
                        <RocketLaunch size={30} weight='fill' className='fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' />
                        {ctaText}
                    </button>
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
                <div className='flex flex-col md:flex-row justify-center align-center gap-3'>
                    <div className='-space-x-5 avatar-group justify-start overflow-hidden rounded-full '>
                            {avatars.map((avatar, index) => (
                                <div className='avatar w-12 h-12 relative inline-flex'>
                                    <img key={index} src={avatar} alt={`Avatar ${index + 1}`} fetchPriority='high' width={400} height={400} decoding='async' style={{color:'transparent'}}  />
                                </div>
                            ))}
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
                        <div>
                            <span className='font-semibold'>{bold_avatar_text} </span>
                            {avatar_text}
                        </div>
                    </div>
                </div>

                </div>
                
                <div className="flex justify-center items-center max-md:-m-4 lg:w-full h-full ">
                    {/* <img src={heroImage} alt="Hero Image" className=" md:-mt-9 w-full h-auto " style={{color:'transparent'}} /> */}
                    <div className="md:mt-9 w-full h-full flex justify-center items-center">
                        <HeroAnimation />
                    </div>
                </div>
        </div>
    );
};

export default Hero;