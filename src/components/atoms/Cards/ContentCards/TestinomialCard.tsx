'use client';
import React from 'react';
import { Tweet } from 'react-tweet';
import Image from 'next/image';
import { Star } from 'phosphor-react';

interface TestimonialCardProps {
    tweetLink?: string | null;
    description?: string | null;
    image?: string | null;
    profileName?: string | null;
    profileDesc?: string | null;
    showStars?: boolean; 
    starCount?: number;  

}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
    tweetLink,
    description,
    image,
    profileName,
    profileDesc,
    showStars = false,
    starCount = 0,
    }) => {
    // Check if any profile data exists
    const hasProfileData = Boolean(image || profileName);

    // Render tweet if tweetLink is provided
    if (tweetLink) {
        const tweetId = tweetLink.split('/').pop() || '';
        return (
            <li className="break-inside-avoid max-md:flex h-full justify-center">
                <Tweet id={tweetId} />
            </li>
        );
    }

    const renderStars = () => {
        return Array.from({ length: starCount }, (_, index) => (
            <Star key={index} size={20} weight='fill' className="text-yellow-500" />
        ));
    };

    // Render testimonial card
    return (
        <li className="break-inside-avoid max-md:flex">
            <div className="p-4 bg-cards-bg/20 backdrop-blur-lg border border-elements-secondary rounded-lg flex flex-col hover:bg-cards-bg/45 hover:shadow-md transition-all duration-300 ease-in-out">
               
                {/* Star Icon at the Top-Left */}
                {showStars && starCount > 0 && (
                    <div className="flex items-center gap-1 ml-3">
                        {renderStars()}
                    </div>
                )}

                {/* Description Section */}
                {description && (
                    <div className="text-lg font-thin p-4 leading-tight select-none flex-grow">
                        {description}
                    </div>
                )}

                {/* Separator if both description and profile data exist */}
                {description && hasProfileData && (
                    <div className="my-2 border-t border-elements-secondary"></div>
                )}

                {/* Profile Section */}
                {hasProfileData && (
                    <div className="flex items-center">
                        {image && (
                            <Image
                                src={image || '/default-profile.png'}
                                alt={profileName || 'Profile Image'}
                                width={48}
                                height={48}
                                className="rounded-full mr-4 object-cover"
                            />
                        )}
                        {profileName && (
                            <div>
                                <p className="font-medium drop-shadow">{profileName}</p>
                                {profileDesc && (
                                    <p className='font-thin text-sm'>{profileDesc}</p>
                                )}
                                <div className="rating"></div>
                            </div>
                        )}
                    </div>
                )}

                {/* Default Content Fallback */}
                {!description && !hasProfileData && (
                    <div className="text-center py-4">No testimonial available</div>
                )}
            </div>
        </li>
    );
};

export default TestimonialCard;
