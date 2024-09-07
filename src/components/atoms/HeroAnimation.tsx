import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunch } from 'phosphor-react';

const HeroAnimation: React.FC = () => {
    const outerCircleRadius = 160; // Radius of the outer circle (half of w-80)
    const smallCircleSize = 82; // Size of the small circles
  
    const orbitAnimation = {
      rotate: [0, 360],
      transition: {
        repeat: Infinity,
        duration: 10,
        ease: 'linear',
      },
    };  
    // const positions = [
    //   { top: `calc(50% - ${outerCircleRadius}px)`, left: '50%' }, // Top
    //   { top: '50%', left: `calc(50% + ${outerCircleRadius}px)` }, // Right
    //   { top: `calc(50% + ${outerCircleRadius}px)`, left: '50%' }, // Bottom
    //   { top: '50%', left: `calc(50% - ${outerCircleRadius}px)` }, // Left
    // ];
    // const positions = [
    //     { angle: 0 }, // Top
    //     { angle: 90 }, // Right
    //     { angle: 180 }, // Bottom
    //     { angle: 270 }, // Left
    //   ];
    
    //   const orbitAnimation = {
    //     rotate: [0, 360],
    //     transition: {
    //       repeat: Infinity,
    //       duration: 10,
    //       ease: 'linear',
    //     },
    //   };

  return (
    <div className=" relative flex  h-96 justify-center items-center bg-transparent">
      <motion.div
          className="absolute w-80 h-80 border-2 border-elements-secondary rounded-full"
        />
        <motion.div
            className="relative w-24 h-24 bg-elements-secondary rounded-full flex justify-center items-center z-10"
            whileHover={{ scale: 1.3 }}
            >
            <RocketLaunch size={45} weight='bold' />
        </motion.div>

        <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            animate={orbitAnimation}
        >
        {/* Small circles */}
  {/* Small circles with icons */}
        <div
          className="absolute bg-elements-secondary rounded-full flex justify-center items-center"
          style={{
            width: smallCircleSize,
            height: smallCircleSize,
            top: `calc(50% - ${outerCircleRadius}px)`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src="/icons/brand/Nextjs_icon.png" alt="Icon 1" className="w-3/4 h-3/4 object-contain rounded-full filter grayscale" />
        </div>
        <div
          className="absolute bg-elements-secondary rounded-full flex justify-center items-center"
          style={{
            width: smallCircleSize,
            height: smallCircleSize,
            top: '50%',
            left: `calc(50% + ${outerCircleRadius}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src="/icons/brand/Resend_icon.png" alt="Icon 2" className="w-3/4 h-3/4 object-contain rounded-full filter grayscale" />
        </div>
        <div
          className="absolute bg-elements-secondary rounded-full flex justify-center items-center"
          style={{
            width: smallCircleSize,
            height: smallCircleSize,
            top: `calc(50% + ${outerCircleRadius}px)`,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src="/icons/brand/stripe_icon.png" alt="Icon 3" className="w-3/4 h-3/4 object-contain rounded-full filter grayscale" />
        </div>
        <div
          className="absolute bg-elements-secondary rounded-full flex justify-center items-center"
          style={{
            width: smallCircleSize,
            height: smallCircleSize,
            top: '50%',
            left: `calc(50% - ${outerCircleRadius}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <img src="/icons/brand/vercel_icon.png" alt="Icon 4" className="w-3/4 h-3/4 object-contain rounded-full filter grayscale" />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroAnimation;