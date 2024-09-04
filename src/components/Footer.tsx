"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import ThemeSwitcher from './atoms/ThemeSwitcher';

const Footer: React.FC = () => {
    

    return (
        <footer className='bg-base-200 border-t border-base-content/10' >
           <div className='max-w-7xl mx-auto px-8 py-24'>
                <div className=' flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className='w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                        <ThemeSwitcher />
                    </div>
                    <div className='flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left'>
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                            <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LINKS</div>
                        <div className='flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm'>
                        <a className="link link-hover" href="/index#pricing">Pricing</a>
                        <a className="link link-hover" href="/index#pricing">Pricing</a>
                        <a className="link link-hover" href="/index#pricing">Pricing</a>
                        <a className="link link-hover" href="/affiliates">Affiliates — Earn up to $99 per sale</a>

                        </div>
                        </div>
                        
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'>
                        <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">LEGAL</div>
                        <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                            <a className="link link-hover" href="/tos">Terms of services</a>
                            <a className="link link-hover" href="/privacy-policy">Privacy policy</a>
                            <a className="link link-hover" href="/license">Licenses</a>
                        </div>
                        </div>
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'></div>
                        <div className='lg:w-1/3 md:w-1/2 w-full px-4'></div>
                    </div>
                </div>
           </div>
            
        </footer>
    );
};

export default Footer;