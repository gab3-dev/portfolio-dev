'use client';

import { berkleyFont } from '@/fonts';
import { Box, Card, Link, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { useTranslations } from 'next-intl';

const CONTACTS = {
  email: 'gabe.dev@icloud.com',
  github: 'https://github.com/gab3-dev',
  linkedin: 'https://www.linkedin.com/in/gabriel-dev13',
};

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
`;

function EmailIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="38" height="38" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

type ContactCard = {
  key: 'email' | 'github' | 'linkedin';
  href: string;
  target?: string;
  Icon: () => React.JSX.Element;
  bg: string;
  iconColor: string;
  glowColor: string;
  delay: string;
};

const contactCards: ContactCard[] = [
  {
    key: 'email',
    href: `mailto:${CONTACTS.email}`,
    target: undefined,
    Icon: EmailIcon,
    bg: 'rgba(20, 20, 22, 0.88)',
    iconColor: '#60C8FF',
    glowColor: 'rgba(96, 200, 255, 0.35)',
    delay: '0s',
  },
  {
    key: 'github',
    href: CONTACTS.github,
    target: '_blank',
    Icon: GitHubIcon,
    bg: 'rgba(20, 20, 22, 0.88)',
    iconColor: '#E8E8E8',
    glowColor: 'rgba(200, 200, 200, 0.25)',
    delay: '0.1s',
  },
  {
    key: 'linkedin',
    href: CONTACTS.linkedin,
    target: '_blank',
    Icon: LinkedInIcon,
    bg: 'rgba(20, 20, 22, 0.88)',
    iconColor: '#0A84FF',
    glowColor: 'rgba(10, 132, 255, 0.4)',
    delay: '0.2s',
  },
];

export default function Contacts() {
  const t = useTranslations('contacts');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90vw',
        margin: '30px auto',
        gap: '48px',
        paddingBottom: '40px',
      }}
    >
      {/* Hero terminal card */}
      <Box
        sx={{
          backgroundColor: 'rgba(20, 20, 22, 0.85)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 16px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          padding: { xs: '28px 20px', md: '44px 60px' },
          maxWidth: '600px',
          width: '100%',
          animation: `${float} 5s ease-in-out infinite`,
        }}
      >
        {/* Traffic lights */}
        <Box sx={{ display: 'flex', gap: '8px', mb: '24px' }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
        </Box>

        <Typography
          style={berkleyFont.style}
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: 'rgba(255, 255, 255, 0.45)',
            textAlign: 'left',
            mb: '14px',
          }}
        >
          {'> gabe.contacts()'}
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              backgroundColor: '#28C840',
              ml: '2px',
              verticalAlign: 'text-bottom',
              animation: `${blink} 1s step-end infinite`,
            }}
          />
        </Typography>

        <Typography
          style={berkleyFont.style}
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.9rem', md: '2.6rem' },
            color: 'white',
            mb: '14px',
            letterSpacing: '-0.02em',
          }}
        >
          {t('pageTitle')}
        </Typography>

        <Typography
          style={berkleyFont.style}
          sx={{
            fontSize: { xs: '1rem', md: '1.1rem' },
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.75,
          }}
        >
          {t('intro')}
        </Typography>
      </Box>

      {/* Contact cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          gap: '20px',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {contactCards.map(({ key, href, target, Icon, bg, iconColor, glowColor, delay }) => (
          <Link
            key={key}
            href={href}
            target={target}
            rel={target ? 'noopener noreferrer' : undefined}
            underline="none"
            sx={{
              display: 'block',
              animation: `${fadeUp} 0.55s ease both`,
              animationDelay: delay,
            }}
          >
            <Card
              sx={{
                borderRadius: '20px',
                padding: '32px 24px',
                backgroundColor: bg,
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: `0 20px 56px ${glowColor}`,
                },
              }}
            >
              <Box sx={{ color: iconColor, mb: '16px', display: 'flex', justifyContent: 'center' }}>
                <Icon />
              </Box>
              <Typography
                style={berkleyFont.style}
                variant="h6"
                sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.9)', mb: '8px' }}
              >
                {t(`${key}Title`)}
              </Typography>
              <Typography
                style={berkleyFont.style}
                sx={{
                  fontSize: '0.9rem',
                  color: iconColor,
                  opacity: 0.85,
                  wordBreak: 'break-word',
                }}
              >
                {t(`${key}Label`)}
              </Typography>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

