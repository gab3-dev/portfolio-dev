import React from 'react';
import { Box, Typography } from '@mui/material';
import { berkleyFont } from '@/fonts';
import HoverImage from '@/components/core/hover-image';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  const defaultVariant = 'h4';
  const defaultTypographyStyle = {
    style: berkleyFont.style,
    sx: {
      display: 'flex',
      padding: { xs: '10px 16px', sm: '20px' },
      margin: '0 auto',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 'clamp(1.2rem, 1rem + 1.6vw, 2.125rem)',
      lineHeight: 1.3,
    },
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 3fr 1fr' },
          alignItems: 'center',
          width: { xs: '100vw', sm: '90vw' },
          height: '80vh',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <HoverImage name="linux" height={150} width={150} alt="Linux" style={{ alignSelf: 'end' }} />
          <HoverImage name="dotnet" height={150} width={150} alt="DotNet" />
          <HoverImage name="flutter" height={150} width={150} alt="Flutter" style={{ alignSelf: 'end' }} />
        </Box>
        <div>
          <Typography
            style={defaultTypographyStyle.style}
            variant={defaultVariant}
            sx={defaultTypographyStyle.sx}
          >
            {t('greeting')}
          </Typography>
          <Typography
            style={defaultTypographyStyle.style}
            variant={defaultVariant}
            sx={defaultTypographyStyle.sx}
          >
            {t('stack')}
          </Typography>
          <Typography
            style={defaultTypographyStyle.style}
            variant={defaultVariant}
            sx={defaultTypographyStyle.sx}
          >
            {t('pitch')}
          </Typography>
        </div>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <HoverImage name="postgresql" height={150} width={150} alt="PostgreSQL" />
          <HoverImage name="rust" height={150} width={150} alt="Rust" style={{ alignSelf: 'end' }} />
          <HoverImage name="angular" height={150} width={150} alt="Angular" />
        </Box>
      </Box>
    </>
  );
}
