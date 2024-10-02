import Head from 'next/head';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import siteConfig from '@config/siteConfig.json'

const licenseAgreementSections = [
    {
      title: '1. Introduction',
      content: 'This License Agreement ("Agreement") is entered into between BuildFast, represented by Chirag, whose contact information is chirag@buildfasts.com, and you, the user ("Licensee"), regarding the use of the BuildFast coding boilerplate (the "Product") available at https://buildfasts.com (the "Website"). By downloading, accessing, or using the Product, the Licensee agrees to the terms and conditions of this Agreement.'
    },
    {
      title: '2. Grant of License',
      content: 'BuildFast grants the Licensee a non-exclusive, non-transferable, and non-sublicensable license to use the Product, subject to the terms and conditions of this Agreement.'
    },
    {
      title: '2.1 Personal License',
      content: 'The Personal License allows the Licensee to: \n- Create unlimited projects. \n- Build and develop landing pages or applications for personal or commercial use.'
    },
    {
      title: '2.2 Team License',
      content: 'The Team License allows the Licensee to: \n- Create unlimited projects. \n- Build and develop landing pages or applications as part of a team. \n- Share the code with other team members to collaborate on projects.'
    },
    {
      title: '3. Restrictions',
      content: 'Licensee agrees not to: \n- Modify, reverse engineer, decompile, disassemble, or create derivative works based on the BuildFast boilerplate. \n- Remove, alter, or obscure any copyright, trademark, or other proprietary notices from the BuildFast boilerplate. \n- Use the BuildFast boilerplate in any way that violates applicable laws, regulations, or third-party rights. \n- Transfer, sub-license, rent, or lease the BuildFast boilerplate or any rights granted under this Agreement.'
    },
    {
      title: '4. Ownership and Intellectual Property',
      content: 'BuildFast retains all ownership and intellectual property rights to the BuildFast boilerplate. This Agreement does not grant the Licensee any ownership rights to the BuildFast boilerplate.'
    },
    {
      title: '5. Warranty Disclaimer',
      content: 'THE BUILDFAST BOILERPLATE IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.'
    },
    {
      title: '6. Limitation of Liability',
      content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, BUILDFAST SHALL NOT BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATING TO THE USE OR INABILITY TO USE THE BUILDFAST BOILERPLATE, EVEN IF BUILDFAST HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.'
    },
    {
      title: '7. Governing Law and Jurisdiction',
      content: 'This Agreement shall be governed by and construed in accordance with the laws of [Country or Region], without regard to its conflict of law provisions. Any disputes arising under or related to this Agreement will be subject to the exclusive jurisdiction of the courts located in [Region].'
    },
    {
      title: '8. Entire Agreement',
      content: 'This Agreement constitutes the entire understanding between BuildFast and the Licensee regarding the use of the Product and supersedes any prior agreements, representations, or warranties related to the subject matter.'
    },
    {
      title: '9. Contact Information',
      content: 'For any questions or concerns regarding this Agreement, please contact Chirag at chirag@buildfasts.com.'
    }
  ];
  


export default function Terms() {
    const router = useRouter();
    const {brand} = siteConfig;

  return (
    <>
      <Head>
        <title>Licenses | {brand}</title>
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
            <h1 className="text-3xl font-bold">{brand} License Agreement</h1>
            <div className='text-sm font-normal flex flex-col gap-5'>
              {licenseAgreementSections.map((section, index) => (
                <div key={index} className='flex flex-col gap-2'>
                  <h2 className='font-semibold text-lg'>{section.title}</h2>
                  <p className='text-foreground-hsl/70 text-base' dangerouslySetInnerHTML={{ __html: section.content }}></p>
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