import { berkleyFont } from '@/fonts';
import MainImageComparison from '@/components/core/main-image-comparison';
import MainMacbookMockup from '@/components/core/main-macbook-mockup';
import Carousel from '@/components/core/carousel';
import Section from '@/components/core/section';
import { Box, Card, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const t = useTranslations('projects');

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
      <Section
        title={t('webTitle')}
        description={t('webDescription')}
        backgroundColor="#DAEAF6"
      >
        <Carousel>
          <MainMacbookMockup style={{ backgroundColor: '#004EA5' }}>
            <MainImageComparison
              urlBefore="/comparison/project_T_old.png"
              urlAfter="/comparison/project_T_new.png"
            />
          </MainMacbookMockup>
          <MainMacbookMockup style={{ backgroundColor: '#016DAD' }}>
            <MainImageComparison
              urlBefore="/comparison/project_G_old.png"
              urlAfter="/comparison/project_G_new.png"
            />
          </MainMacbookMockup>
        </Carousel>
      </Section>
      <Section
        title={t('mobileTitle')}
        description={t('mobileDescription')}
        backgroundColor="#F3A9B1"
      >
        {/* Carousel for small screens */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Carousel>
            <img src="/projects/mangako/mangako_collection.png" style={{ height: '70vh', width: 'auto' }} alt="MangaKo Collection" />
            <img src="/projects/mangako/mangako_manga.png" style={{ height: '70vh', width: 'auto' }} alt="MangaKo Manga" />
            <img src="/projects/mangako/mangako_search.png" style={{ height: '70vh', width: 'auto' }} alt="MangaKo Search" />
          </Carousel>
        </Box>
        {/* Flex layout for larger screens */}
        <Card
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            gap: '10px',
            padding: { xs: '10px', md: '30px 60px' },
            backgroundColor: 'transparent',
            boxShadow: 'none',
          }}
        >
          <img src="/projects/mangako/mangako_collection.png" style={{ height: '85vh', width: 'auto' }} alt="MangaKo Collection" />
          <img src="/projects/mangako/mangako_manga.png" style={{ height: '85vh', width: 'auto' }} alt="MangaKo Manga" />
          <img src="/projects/mangako/mangako_search.png" style={{ height: '85vh', width: 'auto' }} alt="MangaKo Search" />
        </Card>
      </Section>
    </>
  );
}
