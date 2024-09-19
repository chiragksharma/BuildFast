import React, { useState } from 'react';
import { RocketLaunch,CircleNotch } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json';
import {ArrowRight,CheckCircle,XCircle} from 'phosphor-react';
import useJoinWaitlist from '@hooks/useJoinWaitlist';
import {motion} from 'framer-motion';
interface ButtonProps {
    onClick?: () => void;
    text: string;
    toolTipText?: string;
    redirect?: string;
}

const ButtonLead: React.FC<ButtonProps> = ({ onClick, text,toolTipText,redirect }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const { joinWaitlist, error, success } = useJoinWaitlist();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleClick = async () => {
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await joinWaitlist(email);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className='w-full flex flex-col items-center space-y-4 gap-1'>
            <input 
                type="email" 
                value={email} 
                onChange={handleEmailChange} 
                placeholder="Enter your email" 
                className=" w-full  p-4 bg-transparent border border-border-color-primary/55 rounded-xl"
             />
        <button 
        className={`flex flex-row gap-1 items-center justify-center py-3 rounded-lg w-full text-foreground-opposite group text-xl font-extrabold ${loading ? 'btn-loading' : 'bg-primary-color hover:bg-primary-color/90'}`} 
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
                    {text}
                    <ArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1"/>
                </>
            )}
        </button>
        {error && 
            <motion.p 
                className="text-red-500 flex gap-2 items-center mt-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}            
            >
                <XCircle size={20}/>
                {error}
            </motion.p>
        }
        {success && (
        <motion.p 
            className="text-green-500 flex gap-2 items-center mt-4"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <CheckCircle size={20}/> Successfully joined the waitlist!
            </motion.p>
        )}
        </div>

    );
};

export default ButtonLead;