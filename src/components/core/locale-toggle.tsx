'use client';

import Fab from '@mui/material/Fab';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { berkleyFont } from '@/fonts';

export default function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = () => {
    const nextLocale = locale === 'pt' ? 'en' : 'pt';
    router.push(pathname.replace(`/${locale}`, `/${nextLocale}`));
  };

  return (
    <Fab
      size="small"
      onClick={handleToggle}
      style={berkleyFont.style}
      sx={{
        position: 'fixed',
        bottom: 48,
        right: '5vw',
        fontWeight: 700,
        fontSize: '0.85rem',
        backgroundColor: 'rgba(138,138,142,0.5)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.32)',
        padding: '25px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        '&:hover': { backgroundColor: 'rgba(138,138,142,0.5)' },
        zIndex: 1300,
      }}
    >
      {locale === 'pt' ? 'EN' : 'PT'}
    </Fab>
  );
}
