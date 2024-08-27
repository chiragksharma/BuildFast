import React from 'react';

const ProblemsComponents: React.FC = () => {
    return (
        <section className='relative py-28 px-8'>
            <div className='max-w-5xl mx-auto px-8 '>
            <h2 className="text-center font-extrabold text-4xl md:text-5xl tracking-tight mb-12 md:mb-20">Tired of managing Stripe invoices?</h2>
                <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-12'>
                    <div className='bg-rose-100/75 text-rose-700 p-8 md:p-12 rounded-lg w-full max-w-md '>
                    <h3 className="font-bold text-lg mb-4">Stripe invoices + ZenVoice</h3>
                    <ul>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/wrong-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/wrong-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/wrong-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/wrong-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                    </ul>
                    </div>


                    <div className='bg-emerald-100/70 text-emerald-700 p-8 md:p-12 rounded-lg w-full max-w-md'>
                    <h3 className="font-bold text-lg mb-4">Stripe invoices + ZenVoice</h3>
                    <ul>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/tick-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/tick-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/tick-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                        <li className='flex gap-2 items-center'>
                            <img src="/icons/tick-icon.svg" alt="" />
                            One-time payment for unlimited invoices
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ProblemsComponents;