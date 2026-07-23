'use client';

import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { berkleyFont } from '@/fonts';

const SWITCH_DURATION = 260;

export default function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(locale);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isEnglish = selectedLocale === 'en';

  useEffect(() => {
    setSelectedLocale(locale);
    setIsAnimating(false);

    return () => {
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    };
  }, [locale]);

  const handleToggle = () => {
    if (isAnimating) return;

    const nextLocale = isEnglish ? 'pt' : 'en';
    const nextPathname = pathname.replace(/^\/(pt|en)(?=\/|$)/, `/${nextLocale}`);

    setSelectedLocale(nextLocale);
    setIsAnimating(true);
    navigationTimer.current = setTimeout(() => {
      router.replace(nextPathname, { scroll: false });
    }, SWITCH_DURATION);
  };

  return (
    <ButtonBase
      role="switch"
      aria-checked={isEnglish}
      aria-label={isEnglish ? 'Mudar idioma para português' : 'Switch language to English'}
      aria-disabled={isAnimating}
      onClick={handleToggle}
      disableRipple
      style={berkleyFont.style}
      sx={{
        position: 'fixed',
        bottom: 48,
        right: '5vw',
        width: 108,
        height: 48,
        borderRadius: '24px',
        padding: '5px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        fontWeight: 700,
        fontSize: '0.85rem',
        backgroundColor: 'rgba(210,210,215,0.5)',
        backdropFilter: 'blur(40px) saturate(180%)',
        WebkitBackdropFilter: 'blur(40px) saturate(180%)',
        color: 'white',
        border: '1px solid rgba(255,255,255,0.32)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        transition: 'box-shadow 180ms ease, background-color 180ms ease',
        '&:hover': {
          backgroundColor: 'rgba(210,210,215,0.6)',
          boxShadow: '0 10px 36px rgba(0,0,0,0.32)',
        },
        '@media (prefers-reduced-motion: reduce)': {
          transition: 'none',
          '& .locale-toggle-thumb': { transition: 'none' },
        },
        zIndex: 1300,
      }}
    >
      <Box
        className="locale-toggle-thumb"
        sx={{
          position: 'absolute',
          top: 5,
          left: 5,
          width: 48,
          height: 36,
          borderRadius: '18px',
          backgroundColor: 'rgba(35,35,38,0.92)',
          boxShadow: '0 3px 12px rgba(0,0,0,0.3)',
          transform: `translateX(${isEnglish ? 48 : 0}px)`,
          transition: `transform ${SWITCH_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />
      <Box
        component="span"
        sx={{
          position: 'relative',
          zIndex: 1,
          color: isEnglish ? 'rgba(35,35,38,0.72)' : 'white',
          transition: `color ${SWITCH_DURATION}ms ease`,
        }}
      >
        PT
      </Box>
      <Box
        component="span"
        sx={{
          position: 'relative',
          zIndex: 1,
          color: isEnglish ? 'white' : 'rgba(35,35,38,0.72)',
          transition: `color ${SWITCH_DURATION}ms ease`,
        }}
      >
        EN
      </Box>
    </ButtonBase>
  );
}
