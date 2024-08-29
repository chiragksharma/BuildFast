import React from 'react';
import { Tweet } from 'react-tweet'

const Testimonials11: React.FC = () => {
    return (
        <section className="bg-base-100 mt-16" id='testinomials'>
            <div className="py-24 px-4 max-w-7xl mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <div className='mb-8'>
                        <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">4461 makers built AI tools, SaaS, and more</h2>
                    </div>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">They made their first $ online, and some even quit their 9-5!</p>
                </div>
                <ul role='list' className='max-w-7xl mx-auto md:columns-2 lg:columns-3 xl:columns-4 space-y-4 md:space-y-6 md:gap-6'>
                    <li className='break-inside-avoid max-md:flex justify-center'>
                        <div className='max-w-[550px] border border-base-content/20 rounded-xl'>
                            <div className='relative w-full overflow-hidden rounded-t-xl'>
                            <div className="absolute bottom-0 -inset-x-4 border bg-base-200/50 blur-lg h-24 translate-y-1/4 animate-opacity"></div>
                            <div className='absolute w-full bottom-0 z-50'>
                                <div className='flex justify-between items-end p-4'>
                                    <button className='group' type='button' title='play video'>
                                        CLICK
                                    </button>
                                    <div className='animate-opacity text-right'>
                                    <p className="text-gray-50 font-medium drop-shadow">Jack F.</p>
                                    <div className='rating'></div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className='relative z-20 bg-primary text-primary-content text-lg font-medium p-4 leading-tight select-none rounded-b-xl'>
                                <div>
                                I shipped in 6 days as a noob coder... This is awesome
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