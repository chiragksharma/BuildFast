import React, { useState } from 'react';
import { RocketLaunch,CircleNotch } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json';

interface ButtonProps {
    onClick?: () => void;
    text: string;
    toolTipText?: string;
    redirect?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, text,toolTipText,redirect }) => {
    const [loading, setLoading] = useState(false);
    const handleClick = async () => {
        console.log('Button Clicked');
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            if (onClick){
                await onClick();
            }
            else if (redirect){

            }

        } finally {
            setLoading(false);
        }
    };
    
    return (
        <button 
        className={`btn  w-full text-foreground-opposite group text-xl font-extrabold ${loading ? 'btn-loading' : 'btn-primary bg-primary-color'}`} 
        onClick={handleClick}
        title={toolTipText}
        disabled={loading}
        >
            {/* <img src="/brand_logo_black.svg" alt="brand_logo_black" className='w-7 h-7 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' /> */}
            {loading ? (
                <CircleNotch 
                    size={30} 
                    weight='fill' 
                    className='animate-spin fill-primary-content transition-transform duration-200 ease-in-out'
                />
            ) : (
                <>
                    <RocketLaunch 
                        size={30} 
                        weight='fill' 
                        className='fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200 ease-in-out' 
                    />
                    {text}
                </>
            )}
        </button>
    );
};

export default ButtonPrimary;