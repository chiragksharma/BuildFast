"use client"
import React, { useEffect, useState } from 'react';
import siteConfig from '@config/siteConfig.json';
import { RocketLaunch } from 'phosphor-react';
import FooterConfig from '@config/footer/footer.json';
import { getIconByName } from '@utils/getIconFromName';

const Footer: React.FC = () => {
    const { brand, logo, description, sections } = FooterConfig;
    const IconComponent = getIconByName(logo) as React.ComponentType<any>;
    
    return (
    <footer className='bg-background-primary border-t border-border-color-primary/65' id='footer'>
            <div className='max-w-7xl mx-auto px-8 py-24'>
                <div className='flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                    <div className='w-80 max-w-full flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
                        <a href="/" className='flex gap-2 justify-center md:justify-start items-center text-primary-color'>
                        {IconComponent && <IconComponent size={30} weight="fill" />}
                        <h1 className='text-foreground-hsl text-xl font-bold'>{brand}</h1>
                        </a>
                        <p className="mt-3 text-sm text-foreground-hsl/70 leading-relaxed">
                            {description}<br />Copyright ©2024 All rights reserved
                        </p>
                        <a href="/" className='inline-block mt-4 text-sm border border-border-color-primary hover:border-border-color-primary/40 hover:text-foreground-hsl/90 hover:bg-background-primary/35 duration-200 cursor-pointer rounded text-foreground-hsl/80 px-2 py-1'>
                            <div className='flex gap-1 items-center'>
                                <span className='text-foreground-hsl/55'>Built with</span>
                                <span className='font-bold text-base-content flex gap-0.5 items-center tracking-tight text-primary-color'>
                                    <RocketLaunch size={20} weight='fill' />
                                    <span className='text-foreground-hsl'>{brand}</span>
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className='flex-grow flex flex-wrap md:pl-24 -mb-10 md:mt-0 mt-10 text-center md:text-left'>
                        {sections.map((section, index) => (
                            <div key={index} className='lg:w-1/3 md:w-1/2 w-full px-4'>
                                <div className="font-semibold text-foreground-hsl/65 tracking-widest text-sm md:text-left mb-3">{section.title}</div>
                                <div className='flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm'>
                                    {section.links.map((link, linkIndex) => (
                                        <a key={linkIndex} className="hover:underline" href={link.href}>{link.text}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;