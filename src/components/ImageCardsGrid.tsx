'use client';
import React from 'react';
import ImageCard from '@components/atoms/Cards/FeatureCards/ImageCard';
import ProblemsConfig from '@config/problems/problems_with_images.json'; 
import { ArrowUpRight } from 'phosphor-react';

const ImageCardGrid: React.FC = () => {
    // Destructure data from the JSON config
    const { label, heading, problemsList } = ProblemsConfig;

    return (
        <div className="p-4">

            {/* Grid Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 max-w-5xl w-full">
                    {problemsList.map((problem: any, index: number) => (
                        <div
                            key={index}
                            className="w-full max-w-full flex flex-col items-center justify-center mx-auto" // Ensures consistent centering
                        >

                            <ImageCard
                                imageSrc={problem.imageSrc}
                                imageAlt={problem.imageAlt}
                                title={problem.title}
                                description={problem.description}
                            >
                                {/* CTA Button */}
                                {problem.cta && (
                                    <button
                                        onClick={() =>
                                            problem.cta.onClick
                                                ? problem.cta.onClick()
                                                : alert(problem.cta.text)
                                        }
                                        className="px-4 py-2 flex gap-1 text-sm font-normal items-center rounded-md bg-transparent text-foreground-hsl border border-border-color-primary/30"
                                    >
                                        {problem.cta.text}
                                        <ArrowUpRight size={16}/>
                                    </button>
                                )}
                            </ImageCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCardGrid;
