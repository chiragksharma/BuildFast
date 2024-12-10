'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { IconProps } from 'phosphor-react';

interface InfoCardProps {
    icon: React.ComponentType<IconProps>;
    title?: string;
    description: string;
    iconColor?: string;
    hoverScale?: number;
}

const InfoCard: React.FC<InfoCardProps> = ({
    icon: IconComponent,
    title,
    description,
    iconColor = '#C91313',
    hoverScale = 1.05,
}) => {
    return (
        <motion.div
            whileHover={{ scale: hoverScale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="flex flex-row bg-cards-bg-secondary p-4 rounded-lg gap-5 cursor-pointer"
        >
            {/* Icon Section */}
            <div className="flex align-middle items-center">
                {IconComponent && <IconComponent size={34} color={iconColor} />}
            </div>

            {/* Description Section */}
            <div className="items-start text-start">
                {title && (
                    <p className="font-medium text-sm">{title}</p>
                )}
                <p className="font-light text-sm">{description}</p>
            </div>
        </motion.div>
    );
};

export default InfoCard;
