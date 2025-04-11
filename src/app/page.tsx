import React from 'react';

import { SpotLightItem, Spotlight } from '@/components/core/main-spotlight';
import MainAppBar from '@/components/core/main-appbar';
import MainImageComparison from '@/components/core/main-image-comparison';
import MainMacbookMockup from '@/components/core/main-macbook-mockup';


export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <Spotlight className="p-[10px]">
          <SpotLightItem>
            <MainAppBar />
          </SpotLightItem>
        </Spotlight>
        <MainMacbookMockup>
          <MainImageComparison />
        </MainMacbookMockup>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </>
  );
}
