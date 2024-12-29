'use client';
import React from 'react';
import Image from 'next/image';

interface ImageContainerProps {
    imageSrc: string;
    imageAlt?: string;
    borderRadius?: string;
    borderGradient?: string; // Gradient border
    width?: number; // Width in rem (optional)
    height?: number; // Height in rem (optional)
    backgroundColor?: string;
    hasBorder?: boolean;
    className?: string; // ClassName for the parent div
    children?: React.ReactNode; // Children for additional content
}

const ImageContainer: React.FC<ImageContainerProps> = ({
    imageSrc,
    imageAlt = 'Image container',
    borderRadius = '16px',
    borderGradient = 'linear-gradient(135deg, rgba(255,0,150,0.4), rgba(0,204,255,0.4))',
    width,
    height,
    backgroundColor = 'transparent',
    hasBorder = false,
    className = '',
    children,
}) => {
    // Calculate default sizes if width/height are not provided
    const containerWidth = width ? `${width}rem` : '20rem';
    const containerHeight = height ? `${height}rem` : '12rem';

    return (
        <div
            className={className}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: containerWidth,
                maxWidth: '100%',
                background: hasBorder ? borderGradient : backgroundColor,
                padding: hasBorder ? '4px' : undefined, // Padding for gradient border
                borderRadius,
                boxSizing: 'border-box', // Ensures proper padding and border handling
            }}
        >
            {/* Image Layer */}
            <div
                style={{
                    borderRadius,
                    overflow: 'hidden',
                    width: '100%',
                    height: containerHeight,
                    maxHeight: '100%', // Ensure it doesn't overflow
                    background: backgroundColor, // Optional background for the image container
                }}
            >
                {imageSrc.startsWith('http') || imageSrc.startsWith('//') ? (
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                ) : (
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                )}
            </div>

            {/* Children Section */}
            {children && (
                <div
                    style={{
                        marginTop: '8px',
                        width: '100%',
                        textAlign: 'center',
                    }}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default ImageContainer;
