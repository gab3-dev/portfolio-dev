import { berkleyFont } from '@/fonts';
import Section from '@/components/core/section';
import { Box, Card, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('services');

  const services = [
    {
      title: t('refactoringTitle'),
      description: t('refactoringDescription'),
      color: '#DAEAF6',
    },
    {
      title: t('websiteTitle'),
      description: t('websiteDescription'),
      color: '#F3A9B1',
    },
    {
      title: t('mobileTitle'),
      description: t('mobileDescription'),
      color: '#DAF6E4',
    },
    {
      title: t('bugfixTitle'),
      description: t('bugfixDescription'),
      color: '#F6E8DA',
    },
    {
      title: t('apiTitle'),
      description: t('apiDescription'),
      color: '#E8DAF6',
    },
    {
      title: t('consultancyTitle'),
      description: t('consultancyDescription'),
      color: '#F6F0DA',
    },
  ];

  return (
    <>
      <Typography
        style={berkleyFont.style}
        variant="h3"
        sx={{
          display: 'flex',
          padding: '20px',
          margin: '0 auto',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        {t('pageTitle')}
      </Typography>
      <Typography
        style={berkleyFont.style}
        variant="h5"
        sx={{
          display: 'flex',
          padding: '20px',
          margin: '0 auto',
          textAlign: 'center',
          width: { md: '65vw', xs: '90vw' },
          fontSize: { xs: '1.2rem' },
        }}
      >
        {t('intro')}
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: '24px',
          padding: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service, index) => (
          <Card
            key={index}
            sx={{
              padding: '30px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
              },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              minHeight: '200px',
            }}
          >
            <Typography
              style={berkleyFont.style}
              variant="h5"
              sx={{
                fontWeight: 'bold',
                marginBottom: '16px',
                color: '#000',
              }}
            >
              {service.title}
            </Typography>
            <Typography
              style={berkleyFont.style}
              variant="body1"
              sx={{
                color: '#333',
                lineHeight: 1.6,
                fontSize: '1rem',
              }}
            >
              {service.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </>
  );
}
