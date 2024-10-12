import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  companyName: string;
  supportEmail: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  font: string;
  greetingMessage: string;
  closingMessage: string;
  website: string;
  ctaText: string;
  ctaLink: string;
  buttonColor: string;
  buttonTextColor: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  companyName,
  supportEmail,
  primaryColor,
  secondaryColor,
  backgroundColor,
  font,
  greetingMessage,
  closingMessage,
  website,
  ctaText,
  ctaLink,
  buttonColor,
  buttonTextColor,
}) => (
  <div style={{ fontFamily: font, color: primaryColor, lineHeight: '1.6', backgroundColor: backgroundColor }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h1 style={{ color: primaryColor }}>{greetingMessage}, {firstName}!</h1>
      <p>Thank you for joining our waitlist. We are excited to have you on board!</p>
      <p>In the meantime, feel free to explore our website and learn more about what we offer.</p>
      <p>If you have any questions, please do not hesitate to contact our support team at <a href={`mailto:${supportEmail}`} style={{ color: primaryColor }}>{supportEmail}</a>.</p>
      <p>{closingMessage}</p>
      <p>The {companyName} Team</p>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href={ctaLink} style={{ textDecoration: 'none', color: buttonTextColor, backgroundColor: buttonColor, padding: '10px 20px', borderRadius: '5px' }}>{ctaText}</a>
      </div>
    </div>
  </div>
);