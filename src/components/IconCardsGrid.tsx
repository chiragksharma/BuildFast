'use client';
import React from 'react';
import IconCard from '@components/atoms/Cards/FeatureCards/IconCard'; 
import ProblemsConfig from '@config/problems/problems_with_images.json'; 

const IconCardGrid: React.FC = () => {
    const { problemsList } = ProblemsConfig;

    return (
        <div className="p-4">

            {/* Grid Section */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 max-w-5xl w-full">
                    {problemsList.map((problem: any, index: number) => (
                        <div
                            key={index}
                            className="w-full max-w-full flex flex-col items-center justify-center mx-auto"
                        >
                            <IconCard
                                iconName={problem.iconName} // Icon name from JSON
                                title={problem.title}
                                description={problem.description}
                                backgroundColor="background-secondary"
                                textColor="text-black"
                            >
                                {/* Optional Children */}
                                {problem.cta && (
                                    <button
                                        onClick={() =>
                                            problem.cta.onClick
                                                ? problem.cta.onClick()
                                                : alert(problem.cta.text)
                                        }
                                        className="px-4 py-2 flex gap-1 text-sm font-normal items-center rounded-md bg-transparent text-foreground-hsl border border-border-color-primary"
                                    >
                                        {problem.cta.text}
                                    </button>
                                )}
                            </IconCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IconCardGrid;
