'use client';

import { Box, Typography } from '@mui/material';
import { berkleyFont } from '@/fonts';
import { useTranslations } from 'next-intl';
import { keyframes } from '@mui/system';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`;

export default function Blog() {
  const t = useTranslations('blog');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '75vh',
        gap: '32px',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      {/* Animated terminal-style block */}
      <Box
        sx={{
          backgroundColor: 'rgba(20, 20, 22, 0.85)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          boxShadow: '0 16px 64px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          padding: { xs: '32px 24px', md: '48px 64px' },
          maxWidth: '560px',
          width: '100%',
          animation: `${float} 4s ease-in-out infinite`,
        }}
      >
        {/* Fake traffic lights */}
        <Box sx={{ display: 'flex', gap: '8px', mb: '28px' }}>
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FF5F57' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#FEBC2E' }} />
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28C840' }} />
        </Box>

        {/* Terminal prompt */}
        <Typography
          style={berkleyFont.style}
          sx={{
            fontFamily: 'monospace',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            color: 'rgba(255, 255, 255, 0.5)',
            textAlign: 'left',
            mb: '12px',
          }}
        >
          {'> gabe.blog'}
          <Box
            component="span"
            sx={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              backgroundColor: '#28C840',
              ml: '2px',
              verticalAlign: 'text-bottom',
              animation: `${blink} 1s step-end infinite`,
            }}
          />
        </Typography>

        {/* Main heading */}
        <Typography
          style={berkleyFont.style}
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '2rem', md: '2.8rem' },
            color: 'white',
            mb: '20px',
            letterSpacing: '-0.02em',
          }}
        >
          {t('soonHeading')}
        </Typography>

        {/* Subtitle lines */}
        <Typography
          style={berkleyFont.style}
          sx={{
            fontSize: { xs: '1rem', md: '1.15rem' },
            color: 'rgba(255, 255, 255, 0.6)',
            lineHeight: 1.8,
          }}
        >
          {t('soonLine1')}
          <br />
          {t('soonLine2')}
        </Typography>
      </Box>

      {/* Animated dots below */}
      <Box sx={{ display: 'flex', gap: '12px' }}>
        {[0, 1, 2].map((i) => (
          <Box
            key={i}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              animation: `${pulse} 1.5s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
