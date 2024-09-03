"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import ReactPlayer from 'react-player';


const About: React.FC = () => {

    const { profilePhoto, tagline, description, pointers, videoUrl, shortText } = siteConfig.content.about;

    const getTaglineFontSize = (tagline: string):string => {
        const wordCount = tagline.split(' ').length;
        if (wordCount > 5) {
            return 'text-3xl';
        } else if (wordCount < 4) {
            return 'text-5xl';
        } else {
            return 'text-4xl';
        }
    };

    const highlightText = (text: string, highlights: string[]) => {
        const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'));
        return parts.map((part, index) => 
            highlights.includes(part) ? <span key={index} className="text-purple-700 underline">{part}</span> : part
        );
    };

    return (
        <section className='bg-base-100' >
           <div className='py-24 max-md:px-8 max-w-3xl mx-auto'>
                <div className='flex flex-col gap-3 px-2 leading-relaxed text-base-content/80 mb-12 max-w-xl mx-auto'>
                <div className='flex flex-row items-center justify-start gap-5 mb-5'>
                    <img src={profilePhoto} alt="Profile" className='w-24 h-24 rounded-full' />
                    <h1 className={`font-bold mb-4 ${getTaglineFontSize(tagline)}`}>{tagline}</h1>
                </div>
                <div className='flex flex-col items-start text-start'>
                    <p className='text-start mb-4'>{description}</p>
                    <ul className='list-disc list-inside mb-4'>
                        {pointers.map((pointer, index) => (
                            <li key={index}>{highlightText(pointer.text, pointer.highlight)}</li>
                        ))}
                    </ul>

                </div>
                  
                </div>
                <div className='relative max-sm:-mx-8 mb-16'>
                        <div className='max-lg:hidden absolute top-1/4 -left-8 -translate-x-full text-sm flex flex-col gap-1 items-center'>
                            <p className="text-base-content/80">{shortText}</p>
                        </div>
                </div>
                <div className='relative w-full aspect-video overflow-hidden rounded-lg  bg-white/10 backdrop-blur-lg border-8 border-white/10 hover:scale-105 transition-transform duration-200'>
                    <ReactPlayer url={videoUrl} width='100%' height='100%' className='w-full h-full '  controls={true}/>
                    <p className="md:text-lg leading-relaxed">It's a game changer. Comes with an easy-to-follow tutorial, and saves a ton of time.</p>
               
                </div>
           </div>
            
        </section>
    );
};

export default About;