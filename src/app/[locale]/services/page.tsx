'use client';

import { Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import {
  ServiceCard,
  ServiceDef,
  RefactorIcon,
  WebsiteIcon,
  MobileIcon,
  BugIcon,
  ApiIcon,
  ConsultancyIcon,
} from '@/components/core/service-card';
import Section from '@/components/core/section';

// ─── Page ──────────────────────────────────────────────────────────────────
export default function Services() {
  const t = useTranslations('services');

  const services: ServiceDef[] = [
    { title: t('refactoringTitle'), description: t('refactoringDescription'), color: '#60C8FF', Icon: RefactorIcon },
    { title: t('websiteTitle'),     description: t('websiteDescription'),     color: '#FF6B8A', Icon: WebsiteIcon },
    { title: t('mobileTitle'),      description: t('mobileDescription'),      color: '#52D982', Icon: MobileIcon },
    { title: t('bugfixTitle'),      description: t('bugfixDescription'),      color: '#FF9E5A', Icon: BugIcon },
    { title: t('apiTitle'),         description: t('apiDescription'),         color: '#B87FFF', Icon: ApiIcon },
    { title: t('consultancyTitle'), description: t('consultancyDescription'), color: '#FFD95A', Icon: ConsultancyIcon },
  ];

  return (
    <Section title={t('pageTitle')} description={t('intro')} color="primary">
      {/* Cards grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' },
          gap: '30px',
          width: '100%',
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </Box>
    </Section>
  );
}
