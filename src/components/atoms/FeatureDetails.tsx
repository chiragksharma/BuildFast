import React from 'react';
import { FeaturesProps } from '@customTypes/events';


const Features: React.FC<FeaturesProps> = ({ features, activeIndex, toggleAccordion }) => {
    return (
        <div>
            <div>
                <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
                    {activeIndex !== null && (
                        <div className="font-normal leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
                            <p className="font-medium text-base-content text-lg">{features[activeIndex].details.title}</p>
                            <ul className="space-y-1">
                                {features[activeIndex].details.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-3 flex items-center gap-2 text-sm font-semibold">
                                {features[activeIndex].details.links.map((link, idx) => (
                                    <span key={idx}>
                                        <a className="link" href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a>
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="hidden aspect-square max-md:w-full md:h-[28rem] bg-neutral md:order-first">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;