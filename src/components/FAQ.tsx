"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import { CaretUp,CaretDown } from 'phosphor-react';
import { motion } from 'framer-motion';


const FAQ: React.FC = () => {

    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
        setExpanded(expanded === index ? null : index);
    };

    
    return (
        <section className='bg-base mt-7' >
          <div className=' flex flex-col overflow-hidden align-middle items-center max-w-sm py-11 px-10 md:py-24 md:px-24 md:max-w-5xl mx-auto rounded-3xl border border-gray-800'>
            <div className='flex flex-col text-center basis-1/2'>
            <p className='sm:text-4xl text-3xl font-extrabold mb-8'>
                Frequently Asked Questions
            </p>
            <div className='text-base-content/80'>
                Have another question? Contact me on <a href="">Twitter</a> or by <a href="">email</a>
            </div>
            </div>
            <ul className='basis-1/2 mt-9'>
            {siteConfig.content.FAQ.questions.map((item, index) => (
                        <li key={index}>
                            <button
                                className='relative flex gap-2 items-center w-full py-5 px-4 text-base font-semibold text-left border-t  border-t-gray-700 md:text-lg border-base-content/10'
                                onClick={() => toggleExpand(index)}
                            >
                                <span className="flex-1 text-base-content">{item.question}</span>
                                <CaretDown
                                    size={20}
                                    weight="bold"
                                    color='white'
                                    className={`transition-transform duration-200 ${expanded === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <motion.div
                                initial={{ maxHeight: 0, opacity: 0 }}
                                animate={{ maxHeight: expanded === index ? '100vh' : 0, opacity: expanded === index ? 1 : 0 }}
                                exit={{ maxHeight: 0, opacity: 0 }}
                                transition={{
                                    animate: { duration: 0.7, ease: [0.42, 0, 0.58, 1] },
                                    exit: { duration: 0.1, ease: 'easeOut' } 
                                }}
                                className='overflow-hidden'
                            >
                                <div className="pb-5 leading-relaxed py-5 px-4">
                                    <div className="space-y-4 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </motion.div>
                        </li>
                    ))}
            </ul>
          </div>
        </section>
    );
};

export default FAQ;