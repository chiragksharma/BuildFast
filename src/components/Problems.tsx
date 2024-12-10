"use client"
import React from 'react';
import { Leaf } from 'phosphor-react';
import {motion} from 'framer-motion';
import Label from '@atoms/Label';
import siteConfig from '@config/siteConfig.json';
import { Timer, LightbulbFilament, SmileyNervous, Money, IconProps } from 'phosphor-react';
import ProblemsConfig from '@config/problems/problems.json';
import InfoCard from '@components/atoms/Cards/FeatureCards/InfoCard';
import { getIconByName } from '@utils/getIconFromName';

const ProblemsComponents: React.FC = () => {
    const { label, heading, problemsList } = ProblemsConfig;

    return (
        <section className='relative bg-cards-bg text-neutral-content rounded-xl p-8 md:p-12  max-w-xs md:max-w-3xl mx-auto text-center text-lg' id='problems'>
            <div className='flex flex-col text-center w-full mb-10'>
                <Label text={label} />
                    <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-2 max-w-2xl mx-auto">{heading}</h2>
            </div>
            <div className='leading-relaxed space-y-4 md:space-y-6'>
                <div className="text-neutral-content/80 space-y-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {problemsList.map((problem: { title?: string, description: string, icon: string }, index: number) => {
                            const IconComponent = getIconByName(problem.icon) as React.ComponentType<IconProps>;
                            return (
                            <InfoCard
                                key={index}
                                icon={IconComponent}
                                title={problem.title}
                                description={problem.description}
                                iconColor="#C91313"
                                hoverScale={1.05}
                            />
                            );
                        })}
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default ProblemsComponents;