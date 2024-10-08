import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@components/EmailTemplate';
import ResendConfig from '@config/emailConfig/resend.json';
const resend = new Resend(process.env.RESEND_API_KEY as string);

const joinWaitlist = async (req: NextApiRequest, res: NextApiResponse) => {
  const {from ,subject,text}= ResendConfig;

    if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const email1 = resend.emails.send({
      from: 'chirag@buildfasts.com',
      to: email,
      subject: subject,
      text: text,
      react: EmailTemplate({ firstName: 'John' }),
    });
    
    const email2 = resend.emails.send({
      from: 'chirag@buildfasts.com',
      to: from, 
      subject: subject, 
      text: text, 
      react: EmailTemplate({ firstName: 'Jane' }), // Replace with the second recipient's first name
    });

    await Promise.all([email1, email2]);

    return res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default joinWaitlist;