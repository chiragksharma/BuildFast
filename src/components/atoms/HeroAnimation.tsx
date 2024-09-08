import React from 'react';
import { motion } from 'framer-motion';
import { RocketLaunch } from 'phosphor-react';

const HeroAnimation: React.FC = () => {



    const outerCircleRadius = 160; // Radius of the outer circle (half of w-80)
    const smallCircleSize = 90; // Size of the small circles

    const orbitAnimation = {
        rotate: [0, 360],
        transition: {
        repeat: Infinity,
        duration: 25, // Increased duration to slow down the animation
        ease: 'linear',
        },
    };

    const positions = Array.from({ length: 6 }, (_, i) => {
        const angle = (i * 360) / 6;
        return {
        top: `calc(50% + ${outerCircleRadius * Math.sin((angle * Math.PI) / 180)}px)`,
        left: `calc(50% + ${outerCircleRadius * Math.cos((angle * Math.PI) / 180)}px)`,
        };
    });

    const icons = [
        "/icons/brand/Nextjs_svg.svg",
        "/icons/brand/resend-icon-black.svg",
        "/icons/brand/Stripe_svg.svg",
        "/icons/brand/supabase_svg.svg",
        "/icons/brand/framer_icon_black.png", 
        "/icons/brand/tailwind_css.svg", 
    ];

  return (
        <div className="relative flex justify-center items-center h-[28rem] w-96 md:h-72 md:w-72 sm:h-48 sm:w-48 sm:mt-4 bg-transparent overflow-hidden md:overflow-visible">
        <motion.div
            className="absolute w-80 h-80 border-2 border-elements-secondary/40 rounded-full "
        />
        {/* Inner Circle with Hover Effect */}
        <motion.div
            className="relative w-32 h-32 border-2 border-primary-color/70 shadow-md shadow-primary-color/55 bg-primary-color text-foreground-opposite rounded-full flex justify-center items-center z-10 "
            whileHover={{ scale: 1.2 }}
        >
            <RocketLaunch size={58} weight='bold'  />
        </motion.div>
        {/* Orbiting container */}
        <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            animate={orbitAnimation}
        >
            {/* Small circles with icons */}
            {positions.map((position, index) => (
            <div
                key={index}
                className="absolute border-2 border-elements-secondary bg-background-primary rounded-full flex justify-center items-center"
                style={{
                width: smallCircleSize,
                height: smallCircleSize,
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                }}
            >
                <img src={icons[index]} alt={`Icon ${index + 1}`} className="w-3/4 h-3/4 object-contain rounded-full filter grayscale hover:filter-none " />
            </div>
            ))}
        </motion.div>
        </div>
  );
};

export default HeroAnimation;