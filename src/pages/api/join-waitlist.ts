import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '@components/EmailTemplate';
import siteConfig from '@config/siteConfig.json';

const resend = new Resend(process.env.RESEND_API_KEY as string);

const joinWaitlist = async (req: NextApiRequest, res: NextApiResponse) => {
  const {from ,subject,text}= siteConfig.resend;

    if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await resend.emails.send({
      from: from,
      to: email,
      subject: subject,
      text: text,
      react: EmailTemplate({ firstName: 'John' }),
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default joinWaitlist;