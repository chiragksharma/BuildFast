import React from 'react';

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
    return (
        <p className="font-extralight text-foreground-opposite text-sm align-middle items-center self-center mb-5 w-fit px-5 py-1 bg-opacity-40 bg-gray-800 border border-gray-600 rounded-full">
            {text}
        </p>
    );
};

export default Label;