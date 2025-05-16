import React from 'react';
import { berkleyFont } from '@/fonts';

import { SpotLightItem, Spotlight } from '@/components/core/main-spotlight';
import MainAppBar from '@/components/core/main-appbar';
import MainImageComparison from '@/components/core/main-image-comparison';
import MainMacbookMockup from '@/components/core/main-macbook-mockup';
import { Typography } from '@mui/material';


export default function Home() {
  return (
    <>
      <main className={berkleyFont.className + "flex flex-col gap-[32px] row-start-2 sm:items-start"}>
        <Spotlight className="pt-[10px] px-[30px]">
          <SpotLightItem>
            <MainAppBar className={berkleyFont.className} />
          </SpotLightItem>
        </Spotlight>
        <Typography
          style={berkleyFont.style}
          variant='h5'
          sx={{
            display: 'flex',
            padding: '20px',
            margin: '0 auto',
            textAlign: 'center',
            width: { md: '65vw', xs: '90vw' },
            fontSize: { xs: '1.2rem' }
          }}>
          Estes sites foram redesenhados buscando um design mais moderno, com cantos arredondados, novos estilos de fonte, maior contraste entre cores e melhor responsividade.
        </Typography>
        <MainMacbookMockup>
          <MainImageComparison />
        </MainMacbookMockup>
      </main>
      <footer className="flex flex-wrap row-start-3 justify-center items-center gap-[24px]">
      </footer>
    </>
  );
}
