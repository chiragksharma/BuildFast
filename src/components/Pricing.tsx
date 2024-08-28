"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';

const Pricing: React.FC = () => {
    const { quote, heading, description, features,automatic_timer } = siteConfig.content.featuresListicle;

    return (
        <section className='bg-base-200 overflow-hidden' id ="pricing" >
            <div className='py-24 pb-0 px-8 max-w-5xl mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                <p className="font-medium text-primary mb-8">Pricing</p>
                <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8 max-w-2xl mx-auto">Save hours of repetitive code, ship fast, get profitable!</h2>
                <p className='text-sm md:text-base flex justify-center items-center gap-2 '>
                <span><span className="text-accent">$100 off</span> for the first 4440 customers</span>
                </p>
                </div>
                <div className='relative flex flex-col lg:flex-row items-center lg:items-stretch gap-8'>
                    <div className='relative w-full'>
                        <div className='relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg'>
                            <div className='flex justify-between items-center gap-4'>
                            <div><p className="text-lg lg:text-xl font-bold ">Starter</p></div>

                            </div>
                            <div className="flex gap-2"><div className="flex flex-col justify-end mb-[4px] text-lg ">
                                <p className="relative opacity-80">
                                    <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                    <span className="text-base-content">$269</span>
                                    </p></div>
                                    <p className="text-5xl tracking-tight font-extrabold">$169</p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                <p className="text-xs opacity-60 uppercase font-semibold">USD</p></div>
                            </div>

                            <ul className='space-y-2.5 leading-relaxed text-base flex-1'>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                            </ul>
                            <div className='space-y-2'>
                                <button className='btn btn-primary group btn-block'>
                                    Get BuildFast
                                </button>
                                <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                                    Pay once. Build unlimited projects!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-full'>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">
                            POPULAR
                        </span>
                    </div>
                    <div className="absolute -inset-[1px] rounded-[8px] bg-primary z-10"></div>
                        <div className='relative flex flex-col gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg'>
                            <div className='flex justify-between items-center gap-4'>
                            <div><p className="text-lg lg:text-xl font-bold ">Starter</p></div>

                            </div>
                            <div className="flex gap-2"><div className="flex flex-col justify-end mb-[4px] text-lg ">
                                <p className="relative opacity-80">
                                    <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[48%]"></span>
                                    <span className="text-base-content">$269</span>
                                    </p></div>
                                    <p className="text-5xl tracking-tight font-extrabold">$169</p>
                                    <div className="flex flex-col justify-end mb-[4px]">
                                <p className="text-xs opacity-60 uppercase font-semibold">USD</p></div>
                            </div>

                            <ul className='space-y-2.5 leading-relaxed text-base flex-1'>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                                <li className='flex items-center gap-2'>
                                    <span >NextJS boilerplate</span>

                                </li>
                            </ul>
                            <div className='space-y-2'>
                                <button className='btn btn-primary group btn-block'>
                                    Get BuildFast
                                </button>
                                <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                                    Pay once. Build unlimited projects!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='space-y-4 mx-auto max-w-md mt-24'>
            <p className="md:text-lg leading-relaxed">I was able to launch my project in just one day! I made 170$ already.</p>
            <div className='flex items-center gap-2'>
            <p>Mateus De Nardo</p>
            <span className="badge badge-accent badge-outline">Built a SaaS</span>

            </div>
            </div>
            </div>

        </section>
    );
};

export default Pricing;