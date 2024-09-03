"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import Features from '@components/atoms/FeatureDetails';
import { At } from 'phosphor-react';

const FeaturesListicle: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [toggleClicked, setToggleClicked] = useState<boolean>(false);
    const { quote, heading, description, features,automatic_timer } = siteConfig.content.featuresListicle;

    // Iterate over all the features and call the after every 5 seconds which means it should be a carousel of features changing after every 5 seconds
    useEffect(() => {
        if(automatic_timer){
        const interval = setInterval(() => {
            if(!toggleClicked) {
                setActiveIndex((prev) => {
                    if (prev === null || prev === features.length - 1) {
                        return 0;
                    } else {
                        return prev + 1;
                    }
                });
            }
        }, 5000);
        return () => clearInterval(interval);
    }
    }, [features.length,toggleClicked,automatic_timer]);


    const toggleAccordion = (index: number) => {
        setActiveIndex(index);
        setToggleClicked(true);

        setTimeout(() => {
            setToggleClicked(false);
        }, 10000);
    };

    return (
        <section className='py-24' >
            <div className='max-w-3xl mx-auto'>
                <div className='bg-base-100 max-md:px-8 max-w-3xl'>
                    <p className='text-accent font-medium text-sm font-mono mb-3'>
                    {quote}
                    </p>
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-8">{heading}</h2>
                    <div className="text-base-content/80 leading-relaxed mb-8 lg:text-lg">
                    {description}
                    </div>
                </div>
                <div>
                    <div className='grid grid-cols-4 md:flex justify-start max-md:px-8 max-w-3xl mx-auto mb-8'>

                    {features.map((feature, index) => (
                            <span
                            key={index}
                            className={`flex flex-col items-center justify-center gap-3 w-full sm:w-80 md:w-64 lg:w-80 xl:w-96 px-7 py-4 select-none cursor-pointer p-2 duration-100 text-primary ${
                                activeIndex === index ? 'border-b-2 border-yellow-300' : 'border-b-2 border-b-gray-600'
                            }`}
                            onClick={() => toggleAccordion(index)}
                            >
                                <span>
                                    <At size={24} color={activeIndex === index? '#FDE047': 'white'} />
                                    {/* {activeIndex === index ?} */}
                                </span>
                                <span className={`${activeIndex === index? 'text-yellow-300': 'text-white'}`}>
                                    {feature.title}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>

            </div>
            <div className='w-full bg-gray-700'>
                <Features
                    features={features}
                    activeIndex={activeIndex}
                    toggleAccordion={toggleAccordion}
                />
            </div>
            
        </section>
    );
};

export default FeaturesListicle;