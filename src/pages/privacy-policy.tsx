import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json'

const privacyPolicySections = [
    {
        title: '1. Introduction',
        content: 'Your privacy is important to us. It is BuildFast\'s policy to respect your privacy regarding any information we may collect from you across our website and any other sites we own and operate.'
    },
    {
        title: '2. Information We Collect',
        content: 'We only request personal information when it is necessary to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. At the time of data collection, we will inform you why we are collecting it and how it will be used. To streamline the account creation process, you can sign up using your Google account. In this case, your BuildFast account username will be prefilled with your name, and your public profile picture will be used.'
    },
    {
        title: '3. Data Usage and Retention',
        content: 'We retain the collected information only for as long as necessary to provide you with the service you requested. We employ commercially acceptable security measures to protect against loss, theft, unauthorized access, disclosure, copying, use, or modification of your data.'
    },
    {
        title: '4. Data Sharing and Disclosure',
        content: 'We do not share any personally identifying information publicly or with third parties, except as required by law or to fulfill a legal obligation.'
    },
    {
        title: '5. Data Protection',
        content: 'BuildFast acts as both a data controller and a data processor concerning the personal data processed through BuildFast services. We adhere to the applicable data protection laws, including the EU General Data Protection Regulation (GDPR).'
    },
    {
        title: '6. Third-Party Links',
        content: 'Our website may contain links to external websites that are not operated by BuildFast. Please be aware that we do not control these sites\' content or privacy practices and cannot accept responsibility for their respective privacy policies.'
    },
    {
        title: '7. Your Control Over Your Data',
        content: 'You are free to refuse any requests we make for your personal information, with the understanding that it may limit our ability to provide some services to you.'
    },
    {
        title: '8. Acceptance of Terms',
        content: 'By continuing to use our website and services, you consent to the privacy practices outlined in this policy. If you have any questions about how we handle user data and personal information, feel free to contact us.'
    },
    
];


export default function Terms() {
    const router = useRouter();
    const {brand} = siteConfig;

  return (
    <>
      <Head>
        <title>Privacy Policy - {brand}</title>
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
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <div className='text-sm font-normal flex flex-col gap-5'>
              {privacyPolicySections.map((section, index) => (
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