'use client';
import React, { useState } from 'react';
import { getIconByName } from '@utils/getIconFromName';

interface IconCardProps {
    iconName: string; // Icon name passed as a string
    title?: string;
    description?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    children?: React.ReactNode;
}

const IconCard: React.FC<IconCardProps> = ({
    iconName,
    title,
    description,
    backgroundColor = 'background-secondary', // Light background
    textColor = 'text-foreground-hsl', // Dark text
    children,
}) => {
    const IconOrPath = getIconByName(iconName);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };
    
    return (
        <div
            className={`flex flex-col items-center p-12 shadow-sm bg-${backgroundColor} rounded-2xl border-2 border-border-color-primary/40`}
            style={{
                textAlign: 'center',
            }}
        >
            {/* Icon Section */}
            <div
                className="mb-4 flex items-center justify-center p-3 bg-cta-color text-foreground-opposite rounded-xl"
            >
                {typeof IconOrPath === 'string' ? (
                    <img src={IconOrPath} alt={title} width={32} height={32} />
                ) : (
                    <IconOrPath size={32} color="white" />
                )}
            </div>

            {/* Text Section */}
            {(title || description) && (
                <div className="flex flex-col items-center text-center">
                    {title && (
                        <h3
                            className={`font-semibold text-lg mb-2 ${textColor}`}
                            style={{ lineHeight: '1.5' }}
                        >
                            {title}
                        </h3>
                    )}
                    {description && (
                        <div
                            className={`text-sm font-light text-${textColor}`}
                            style={{ lineHeight: '1.6' }}
                        >
                            {isExpanded
                                ? description
                                : truncateText(description, 70)} 
                            {description.length > 70 && ( 
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

            {/* Optional Children Section */}
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default IconCard;
