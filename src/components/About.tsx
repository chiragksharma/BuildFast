"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';

const About: React.FC = () => {
    

    return (
        <section className='bg-base-100' >
           <div className='py-24 max-md:px-8 max-w-3xl mx-auto'>
                <div className='leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto'>

                </div>
                <div className='relative max-sm:-mx-8 mb-16'>
                    <div className='max-lg:hidden absolute top-1/4 -left-4 -translate-x-full text-sm flex flex-col gap-1 items-center'>
                    <p className="text-base-content/80">The code in 3 minutes</p>
                    </div>

                </div>
                <div className='space-y-4 max-w-md mx-auto'>
                    <p className="md:text-lg leading-relaxed">It's a game changer. Comes with an easy-to-follow tutorial, and saves a ton of time.</p>
                <div className='flex items-center gap-2'>
                    <p>Yifan Goh</p>
                    <span className="badge badge-accent badge-outline">Built an AI tool</span>
                </div>
                </div>
           </div>
            
        </section>
    );
};

export default About;