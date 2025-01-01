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
  <div
  style={{
    fontFamily: font,
    color: secondaryColor,
    backgroundColor: backgroundColor,
    lineHeight: '1.8',
    margin: '0',
    padding: '0',
  }}
>
  <div
    style={{
      maxWidth: '600px',
      margin: '20px auto',
      padding: '20px',
      border: `1px solid ${primaryColor}`,
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    {/* Header */}
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1 style={{ color: primaryColor, fontSize: '24px', margin: '0' }}>
        {greetingMessage}, {firstName}!
      </h1>
    </div>

    {/* Body Content */}
    <div style={{ padding: '10px 0' }}>
      <p style={{ fontSize: '16px', margin: '10px 0' }}>
        Welcome to <strong>{companyName}</strong>! We're thrilled to have you on board.
      </p>
      <p style={{ fontSize: '16px', margin: '10px 0' }}>
        While you're waiting, feel free to explore our website and learn more about what we offer. If you have any
        questions, don't hesitate to reach out to our support team.
      </p>
      <p style={{ fontSize: '16px', margin: '10px 0' }}>
        Contact us at{' '}
        <a
          href={`mailto:${supportEmail}`}
          style={{
            color: primaryColor,
            textDecoration: 'underline',
            fontWeight: 'bold',
          }}
        >
          {supportEmail}
        </a>
        .
      </p>
      <p style={{ fontSize: '16px', margin: '20px 0' }}>{closingMessage}</p>
      <p style={{ fontSize: '16px', margin: '10px 0' }}>
        Best regards, <br />
        The <strong>{companyName}</strong> Team
      </p>
    </div>

    {/* Call-to-Action Button */}
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <a
        href={ctaLink}
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          color: buttonTextColor,
          backgroundColor: buttonColor,
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          (e.target as HTMLAnchorElement).style.transform = 'scale(1.05)';
          (e.target as HTMLAnchorElement).style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          (e.target as HTMLAnchorElement).style.transform = 'scale(1)';
          (e.target as HTMLAnchorElement).style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        }}
      >
        {ctaText}
      </a>
    </div>
  </div>

  {/* Footer */}
  <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '12px', color: secondaryColor }}>
    <p>
      Visit us at{' '}
      <a
        href={website}
        style={{ color: primaryColor, textDecoration: 'none', fontWeight: 'bold' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </a>
    </p>
  </div>
</div>
);