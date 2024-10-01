import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';

const sections = [
    {
      title: '1. Introduction',
      content: 'Welcome to BuildFast. These terms and conditions outline the rules for using BuildFast’s services and software, tailored to create landing pages for SaaS products.',
    },
    {
      title: '2. Agreement to Terms and Conditions',
      content: 'By purchasing and using BuildFast, you agree to these terms and conditions. If you do not agree to these terms, please discontinue your use of BuildFast.',
    },
    {
      title: '3. Software License',
      content: 'Upon purchasing BuildFast, we grant you a perpetual, non-exclusive license to use and modify the BuildFast code. You are permitted to use BuildFast’s code to develop landing pages or related software, including for commercial use.',
    },
    {
      title: '4. User Responsibilities',
      content: 'You are responsible for how you utilize BuildFast’s code, including the content you generate and its compliance with applicable laws. You agree to adhere to all local, national, and international laws in your use of BuildFast.',
    },
    {
      title: '5. Refunds',
      content: 'Due to the digital nature of BuildFast, once access to the platform is granted, no refunds or exchanges will be issued.',
    },
    {
      title: '6. Change to Terms',
      content: 'BuildFast may modify these terms and conditions from time to time. You will be notified of any significant changes. However, you are responsible for reviewing these terms periodically for updates.',
    },
    {
      title: '7. Termination of License',
      content: 'BuildFast reserves the right to terminate your license if you violate these terms, without prior notice or liability. This does not affect any other rights BuildFast may have under the law.',
    },
    {
      title: '8. Price Modifications',
      content: 'As BuildFast evolves, prices may change. By purchasing now, you secure the current price and avoid future increases.',
    },
    {
      title: '9. Contact Information',
      content: 'For any questions or concerns about these terms and conditions, please contact us at chirag@buildfasts.com.',
    },
  ];

export default function Terms() {
    const router = useRouter();

  return (
    <>
      <Head>
        <title>Terms and Services - BuildFast</title>
        <meta name="description" content="Terms and Services for BuildFast" />
      </Head>
      <div className='font-brico font-normal'>
        <div className='max-w-xl mx-auto '>
        <div className='p-5 flex flex-col gap-5'>
                <div 
                className='flex flex-row items-center rounded-xl gap-2 align-middle cursor-pointer p-2 text-sm w-fit hover:bg-primary-color/5 transition duration-300' 
                onClick={()=>router.push('/')}
                >
                 <ArrowLeft /> Back
                </div>
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
            <div className='text-sm font-normal flex flex-col gap-5'>
              {sections.map((section, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <h2 className='font-semibold text-lg'>{section.title}</h2>
                  <p className='text-foreground-hsl/60' dangerouslySetInnerHTML={{ __html: section.content }}></p>
                </div>
              ))}
              <div>
                <p className='text-opacity-75'>This document was last updated on the 25th of Sep 2024.</p>
              </div>
            </div>
            </div>

        </div>
      </div>
    </>
  );
}