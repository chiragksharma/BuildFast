"use client";
import React, { useState,useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight,List,X,PaintBucket,RocketLaunch } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json';
import NavPopup from '@atoms/NavPopup';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const themeLinkRef = useRef<HTMLAnchorElement>(null);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
 
  const { logo, brand, content } = siteConfig;
  const { links, cta, mobileMenu } = content.navbar;

  return (
    <header className="max-w-7xl bg-navbar-bg mx-auto px-8 py-5 flex items-center justify-between md:py-10">
        <div className="flex flex-row items-center align-middle gap-1 md:w-40 pl-8">
            {/* <motion.img src={logo} alt={`${brand} Logo`} fetchPriority='high' className='w-8 h-8 text-logo-text-color'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            /> */}
            <motion.div
            className="text-logo-icon-color"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            >
              <RocketLaunch size={30} weight='fill'/>
            </motion.div>
            <h1 className="text-logo-text-color text-xl font-semibold">{brand}</h1>
        </div>
        <nav className="flex items-center pl-12 md:pl-20 gap-4 md:gap-4">
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-foreground-hsl/95 font-brico hover:text-foreground-hsl/75 hover:underline  px-3 py-2">
              {link.text}
            </a>
          ))}
        </div>
          <div className="hidden md:flex items-center md:flex-row md:gap-3 ">
          <a 
          href={cta.href} 
          ref={themeLinkRef}
          className="bg-transparent border font-brico text-nav-normal-btn-text border-nav-normal-btn-border shadow-sm hover:border-nav-links-color px-4 py-2 rounded-lg flex flex-row items-center gap-2 transition delay-75 group"
          onClick={(e) => {
            e.preventDefault();
            togglePopup();
          }}
          >
                Themes
                <PaintBucket size={20} weight='bold' />
            </a>
            <a href={cta.href} className="bg-nav-cta-btn-bg border border-nav-cta-btn-border font-brico text-foreground-opposite px-4 py-2 rounded-lg flex flex-row items-center gap-1 transition delay-75 group">
                {cta.text} 
                <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1"/>
            </a>
          </div>
          <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="p-3 border border-gray-500 rounded-lg focus:outline-none transition-transform duration-300">
          <AnimatePresence mode="wait">
            {isOpen ? (
                <motion.div
                key="x-icon"
                initial={{ opacity: 0}}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                >
                <X size={24} />
                </motion.div>
            ) : (
                <motion.div
                key="list-icon"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                >
                <List size={24} />
                </motion.div>
            )}
            </AnimatePresence>
            </button>
          </div>
        </nav>
        <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden mt-7 flex flex-col gap-2 z-40 absolute top-16 left-0 w-full bg-background-primary items-center justify-center p-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {mobileMenu.map((item, index) => (
            <motion.a
                key={item.text}
                href={item.href}
                className="block font-brico text-foreground-hsl  px-3 py-2 bg-background-primary items-center text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                {item.text}
            </motion.a>
            ))}
          <motion.a
            href={cta.href}
            className="bg-primary-color font-brico border border-border-color-primary text-foreground-opposite px-4 py-2 rounded-lg flex flex-row items-center gap-1  group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
                  {cta.text}
            <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      )}
      {isPopupOpen && (
          <NavPopup isOpen={isPopupOpen} onClose={togglePopup} anchorRef={themeLinkRef} />
        )}
    </AnimatePresence>

        </header>
      );
    };

export default Header;