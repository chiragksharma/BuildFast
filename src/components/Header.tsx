"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight,List,X } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  const { logo, brand, content } = siteConfig;
  const { links, cta, mobileMenu } = content.navbar;

  return (
    <header className="max-w-7xl bg-transparent mx-auto px-8 py-5 flex items-center justify-between md:py-10">
        <div className="flex flex-row items-center align-middle gap-1 md:w-40 pl-8">
            <motion.img src={logo} alt={`${brand} Logo`} fetchPriority='high' className='w-8 h-8'
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            />
            <h1 className="text-white text-xl font-semibold">{brand}</h1>
        </div>
        <nav className="flex items-center pl-12 md:pl-20 gap-4 md:gap-12">
        <div className="hidden md:flex items-center space-x-4">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="text-gray-300 font-brico hover:text-white px-3 py-2">
              {link.text}
            </a>
          ))}
        </div>
          <div className="hidden md:flex items-center ">
            <a href={cta.href} className="bg-transparent border font-brico border-gray-500 text-gray-300 px-4 py-2 rounded-lg flex flex-row items-center gap-1 hover:border-gray-400 hover:text-white transition delay-75 group">
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
      className="md:hidden mt-7 flex flex-col gap-2 z-40 absolute top-16 left-0 w-full bg-black items-center justify-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {mobileMenu.map((item, index) => (
        <motion.a
            key={item.text}
            href={item.href}
            className="block font-brico text-gray-300 hover:text-white px-3 py-2 bg-black items-center text-center"
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
        className="bg-black font-brico border border-gray-500 text-gray-300 px-4 py-2 rounded-lg flex flex-row items-center gap-1  group"
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
</AnimatePresence>
    </header>
  );
};

export default Header;