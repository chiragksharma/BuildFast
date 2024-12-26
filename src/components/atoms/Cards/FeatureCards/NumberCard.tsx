'use client';
import React, { useState } from 'react';

interface InfoCardProps {
    number: number; // Number to display
    title: string; // Card title
    description: string; // Card description
    backgroundColor?: string; // Background color for the card
    textColor?: string; // Text color
    numberColor?: string; // Color for the number
}

const NumberCard: React.FC<InfoCardProps> = ({
    number,
    title,
    description,
    backgroundColor = 'bg-transparent',
    textColor = 'text-gray-900', // Default text color
    numberColor = 'text-foreground-hsl/20', // Default number color
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
        <div
            className={`flex flex-col justify-between p-6 rounded-lg border border-border-color-primary/30 max-w-[320px] min-h-52 ${backgroundColor}`}
        >
            {/* Title and Number Section */}
            <div className="flex justify-between items-center gap-5 h-fit">
                <div>
                    <h2 className={`font-bold text-xl mb-2 leading-tight ${textColor}`}>
                        {title}
                    </h2>
                    
                </div>
                <div
                    className={`font-bold text-[96px] leading-none ${numberColor}`}
                >
                    {number}
                </div>
            </div>

            <div className={`text-sm font-light leading-relaxed ${textColor}`}>
                        {isExpanded
                            ? description
                            : truncateText(description, 63)} {/* Adjust maxLength as needed */}
                        {description.length > 63 && (
                            <button
                                onClick={toggleExpanded}
                                className="ml-1 text-foreground-hsl/20 underline text-sm"
                            >
                                {isExpanded ? 'Show Less' : 'Show More'}
                            </button>
                        )}
                    </div>
        </div>
    );
};

export default NumberCard;
