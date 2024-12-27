'use client';
import React, {useState} from 'react';
import { motion } from 'framer-motion';

interface ImageCardProps {
    imageSrc: string;
    imageAlt?: string;
    title?: string;
    description?: string;
    hoverScale?: number;
    borderRadius?: string;
    backgroundColor?: string;
    textColor?: string;
    imageSize?: { width: string; height: string };
    children?: React.ReactNode;
}

const ImageCard: React.FC<ImageCardProps> = ({
    imageSrc,
    imageAlt = 'Image card',
    title,
    description,
    hoverScale = 1.01,
    borderRadius = '12px',
    backgroundColor = 'background-secondary',
    textColor = 'foreground-hsl',
    imageSize = { width: '100%', height: '200px' },
    children,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <motion.div
            whileHover={{ scale: hoverScale }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={`flex bg-${backgroundColor} flex-col p-4 shadow-md`}
            style={{
                borderRadius,
                textAlign: 'left',
                width: '320px',
                overflow: 'hidden',
            }}
        >
            {/* Text Section */}
            {(title || description) && (
                <div className="mb-4">
                    {title && (
                        <p
                            className={`font-bold text-lg text-${textColor}`}
                            style={{
                                marginBottom: '8px',
                                lineHeight: '1.4',
                            }}
                        >
                            {title}
                        </p>
                    )}
                    {description && (
                        <div
                            className={`text-sm font-light text-${textColor}`}
                            style={{ lineHeight: '1.6' }}
                        >
                            {isExpanded
                                ? description
                                : truncateText(description, 70)} {/* Adjust maxLength as needed */}
                            {description.length > 70 && ( // Show the toggle button only if the text is longer
                                <button
                                    onClick={toggleExpanded}
                                    className="text-foreground-hsl/60 ml-1 "
                                    style={{
                                        fontSize: '0.875rem',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {isExpanded ? 'Show Less' : 'Show More'}
                                </button>
                            )}
                        </div>
                    )}
              
                </div>
            )}

            {/* CTA Section */}
            {children && (
                <div className="my-4">
                    {children}
                </div>
            )}

            {/* Image Section */}
            <div
                style={{
                    width: imageSize.width,
                    height: imageSize.height,
                    borderRadius,
                    overflow: 'hidden',
                }}
            >
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </motion.div>
    );
};

export default ImageCard;
