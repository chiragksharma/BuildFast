"use client"
import React from 'react';
import { Tweet } from 'react-tweet';
import siteConfig from '@config/siteConfig.json';
import { Plus } from 'phosphor-react';

const Testimonials11: React.FC = () => {
    const { testimonialsGrid } = siteConfig.content;
    const { brand } = siteConfig;

    const AddYourTweet = () => {
        const currentUrl = window.location.href;
        const tweetText = `Check out ${brand}! ${currentUrl}`;
        const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
        window.open(tweetUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-base-100 mt-16" id='testinomials'>
            <div className="py-24 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div className='mb-8'>
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">4461 makers built AI tools, SaaS, and more</h2>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">They made their first $ online, and some even quit their 9-5!</p>
                </div>
                <ul role='' className='max-w-7xl mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6 '>
                    {testimonialsGrid.map((testimonial, index) => (
                        <li key={index} className={`break-inside-avoid max-md:flex  ${testimonial.tweetLink ? 'h-full justify-center' : ''}`}>
                            {testimonial.tweetLink ? (
                                <Tweet 
                                    id={testimonial.tweetLink.split('/').pop()} 
                                    apiUrl="https://api.twitter.com/2/tweets" // Provide the required apiUrl prop
                                />    
                                                        
                            ) : (
                                <div className='p-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg flex flex-col hover:bg-white/10 hover:border-white/30 hover:shadow-md'>
                        
                                    <div className='relative z-20 text-white text-lg font-thin p-4 leading-tight select-none rounded-b-xl flex-grow'>
                                        <div>
                                            {testimonial.description}
                                        </div>
                                    </div>
                                    <div className='my-2 border-t border-white/20'></div>
                                    <div className='flex items-center mb-4'>
                                        <img src={testimonial.image} alt={testimonial.profileName} className='w-12 h-12 rounded-full mr-4' />
                                        <div>
                                            <p className="text-gray-50 font-medium drop-shadow">{testimonial.profileName}</p>
                                            <div className='rating'></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                    <li onClick={AddYourTweet} className='break-inside-avoid max-md:flex cursor-pointer select-none w-full h-full rounded-b-xl leading-tight relative z-20  text-lg font-medium flex flex-col'>
                    <div className='p-4 bg-white/5 backdrop-blur-lg border border-white/20 rounded-lg flex flex-col hover:bg-white/10 hover:border-white/30 hover:shadow-md'>
                        <div className='flex flex-col items-center gap-6 relative z-20 text-white text-lg font-thin p-4 leading-tight select-none rounded-b-xl flex-grow'>
                            <Plus size={35} color='white'/>
                            <div className='text-center'>
                                Add yours
                            </div>
                        </div>
                    </div>
                </li>
                </ul>
            </div>
        </section>
    );
};

export default Testimonials11;