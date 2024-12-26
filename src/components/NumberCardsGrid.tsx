'use client';
import React from 'react';
import NumberCard from '@components/atoms/Cards/FeatureCards/NumberCard'; // Assuming NumberCard is in the same directory
import ProblemsConfig from '@config/problems/problems_with_images.json';

const NumberCardGrid: React.FC = () => {
    const { heading, problemsList } = ProblemsConfig;

    return (
        <div className="p-4">
            {/* Heading Section */}
            {heading && (
                <h2 className="text-2xl font-bold text-center mb-6">
                    {heading}
                </h2>
            )}

            {/* Grid Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 max-w-5xl w-full">
                    {problemsList.map((problem: any, index: number) => (
                        <div
                            key={index}
                            className="w-full max-w-full flex flex-col items-center justify-center mx-auto"
                        >
                            <NumberCard
                                number={index + 1} // Dynamic number
                                title={problem.title}
                                description={problem.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NumberCardGrid;
