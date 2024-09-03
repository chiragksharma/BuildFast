"use client"
import React from 'react';
import { Leaf } from 'phosphor-react';
import {motion} from 'framer-motion';
import Label from './atoms/Label';

const ProblemsComponents: React.FC = () => {
    return (
        <section className='relative bg-neutral text-neutral-content rounded-lg p-8 md:p-12 border border-gray-800 max-w-xs md:max-w-3xl mx-auto text-center text-lg'>
            <div className='flex flex-col text-center w-full mb-10'>
                    <Label text="Problem" />
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-2 max-w-2xl mx-auto">Shipfast sucks use BuildFast</h2>
                    <p className='text-sm md:text-base flex justify-center items-center gap-2 '>
                </p>
            </div>
            <div className='leading-relaxed space-y-4 md:space-y-6'>
                <div className="text-neutral-content/80 space-y-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex flex-row bg-gray-800 p-4 rounded-lg gap-5 cursor-pointer">
                            <div className='flex align-middle items-center'>
                                <Leaf size={28} />
                            </div>
                            <div className='items-start text-start'>
                                <p className='font-light text-sm items-start text-white'>This is just the description of what is written on the top</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex flex-row bg-gray-800 p-4 rounded-lg gap-5 cursor-pointer"
                        >
                            <div className='flex align-middle items-center'>
                                <Leaf size={28} />
                            </div>
                            <div className='items-start text-start'>
                                <p className='font-light text-sm items-start text-white'>This is just the description of what is written on the top</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex flex-row bg-gray-800 p-4 rounded-lg gap-5 cursor-pointer"
                        >
                            <div className='flex align-middle items-center'>
                                <Leaf size={28} />
                            </div>
                            <div className='items-start text-start'>
                                <p className='font-light text-sm items-start text-white'>This is just the description of what is written on the top</p>
                            </div>
                        </motion.div>
                        <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex flex-row bg-gray-800 p-4 rounded-lg gap-5 cursor-pointer"
                        >
                            <div className='flex align-middle items-center'>
                                <Leaf size={28} />
                            </div>
                            <div className='items-start text-start'>
                                <p className='font-light text-sm items-start text-white'>This is just the description of what is written on the top</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default ProblemsComponents;