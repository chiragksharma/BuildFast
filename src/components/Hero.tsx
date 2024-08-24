import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 lg:items-start px-8 py-8 lg:py-20">
                <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
                <h1 className="text-4xl font-extrabold lg:text-6xl tracking-tight md:mb-4 flex flex-col gap-3 items-center lg:items-start">
                        Build your Landing page in <span className="relative inline-block">
                    <span className='relative whitespace-nowrap'>
                        <span className="absolute bg-yellow-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1"></span>
                        <span className="relative text-yellow-950">hours</span>
                        </span> , not days
                    </span>
                        
                </h1>
                <p className="text-lg opacity-80 leading-relaxed">The NextJS boilerplate with all you need to build your SaaS product Landing page. Super easy to customize. </p>
                <div className='space-y-4'>
                    <button className='btn btn-primary group btn-wide plausible-event-name=Checkout' title='Go to BuildFast Chekout'>
                        Get Started
                    </button>
                    <p className='text-sm flex justify-center items-center gap-2 md:text-sm'>
                        for the first 5 customers 
                    </p>
                </div>
                </div>
                
                <div className="relative max-md:-m-4 lg:w-full">
                    <img src="/Hero_image.png" alt="Hero Image" className="w-full h-auto " style={{color:'transparent'}} />
                </div>
            </div>
        </div>
    );
};

export default Hero;