"use client"
import React from 'react';
import { Leaf } from 'phosphor-react';
import {motion} from 'framer-motion';
import Label from '@atoms/Label';
import siteConfig from '@config/siteConfig.json';

const ProblemsComponents: React.FC = () => {
    const { label, heading, problemsList } = siteConfig.content.problems;

    return (
        <section className='relative bg-cards-bg text-neutral-content rounded-xl p-8 md:p-12  max-w-xs md:max-w-3xl mx-auto text-center text-lg'>
            <div className='flex flex-col text-center w-full mb-10'>
                <Label text={label} />
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-2 max-w-2xl mx-auto">{heading}</h2>
            </div>
            <div className='leading-relaxed space-y-4 md:space-y-6'>
                <div className="text-neutral-content/80 space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {problemsList.map((problem: { description: string, icon: string }, index: number) => (
                            <motion.div 
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="flex flex-row bg-cards-bg-secondary p-4 rounded-lg gap-5 cursor-pointer"
                            >
                                <div className='flex align-middle items-center'>
                                    <img src={problem.icon} alt={`Icon for ${problem.description}`} className="w-10 h-10" />
                                </div>
                                <div className='items-start text-start'>
                                    <p className='font-light text-sm items-start'>{problem.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default ProblemsComponents;