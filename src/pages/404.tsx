// src/pages/404.tsx
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import ButtonPrimary from '@components/atoms/Buttons/ButtonPrimary';

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.h1 
        className="text-6xl font-bold text-gray-800"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p 
        className="mt-7 text-xl text-gray-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Page Not Found
      </motion.p>
      <Link href="/" className='mt-7 '>
        <ButtonPrimary text='Go Back home'/>
      </Link>
    </div>
  );
};

export default Custom404;