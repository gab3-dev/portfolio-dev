import React from 'react';
import { Typography } from '@mui/material';
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
      padding: '20px',
      margin: '0 auto',
      textAlign: 'center',
      fontWeight: 'bold',
    },
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 3fr 1fr',
          alignItems: 'center',
          width: '90vw',
          height: '80vh',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <HoverImage name="linux" height={150} width={150} alt="Linux" style={{ alignSelf: 'end' }} />
          <HoverImage name="dotnet" height={150} width={150} alt="DotNet" />
          <HoverImage name="flutter" height={150} width={150} alt="Flutter" style={{ alignSelf: 'end' }} />
        </div>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <HoverImage name="postgresql" height={150} width={150} alt="PostgreSQL" />
          <HoverImage name="rust" height={150} width={150} alt="Rust" style={{ alignSelf: 'end' }} />
          <HoverImage name="angular" height={150} width={150} alt="Angular" />
        </div>
      </div>
    </>
  );
}
