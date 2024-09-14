import React from 'react';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <p className="cursor-default font-extralight text-foreground-hsl text-sm align-middle items-center self-center mb-5 w-fit px-5 py-1 bg-opacity-40 bg-background-secondary/15 border border-border-color-primary/40 hover:border-border-color-primary/75 rounded-full">
            {text}
        </p>
    );
};

export default Label;