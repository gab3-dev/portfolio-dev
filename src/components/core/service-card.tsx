'use client';

import { berkleyFont } from '@/fonts';
import { Box, Card, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@/lib/use-media-query';

// ─── Scroll-reveal hook ────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Icons ─────────────────────────────────────────────────────────────────

export function RefactorIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="19" y1="12" x2="5" y2="12" strokeDasharray="2 2" />
    </svg>
  );
}

export function WebsiteIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
    </svg>
  );
}

export function MobileIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" />
      <circle cx="12" cy="18" r="1" fill={color} />
    </svg>
  );
}

export function BugIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 2l1.5 1.5" /><path d="M14.5 3.5 16 2" />
      <path d="M9 8h6M9 12h6M9 16h6" />
      <path d="M4 9h2M18 9h2M4 14h2M18 14h2M4 19h2M18 19h2" />
      <rect x="8" y="6" width="8" height="15" rx="4" />
    </svg>
  );
}

export function ApiIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="5" rx="2" />
      <rect x="2" y="10" width="20" height="5" rx="2" />
      <rect x="2" y="17" width="20" height="5" rx="2" />
      <circle cx="6" cy="5.5" r="1" fill={color} />
      <circle cx="6" cy="12.5" r="1" fill={color} />
      <circle cx="6" cy="19.5" r="1" fill={color} />
    </svg>
  );
}

export function ConsultancyIcon({ color }: { color: string }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6M10 22h4" />
    </svg>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────

export type ServiceDef = {
  title: string;
  description: string;
  color: string;
  Icon: React.ComponentType<{ color: string }>;
};

// ─── ServiceCard ───────────────────────────────────────────────────────────

export function ServiceCard({ title, description, color, Icon, index }: ServiceDef & { index: number }) {
  const isMobile = useMediaQuery('(max-width: 899px)');
  const { ref, visible } = useScrollReveal();

  const fromLeft = index % 2 === 0;
  const initialTransform = isMobile
    ? `translateX(${fromLeft ? '-72px' : '72px'})`
    : 'translateY(36px)';
  const delay = `${index * 0.07}s`;

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : initialTransform,
        transition: `opacity 0.55s ease ${delay}, transform 0.55s ease ${delay}`,
        display: 'flex',
      }}
    >
      <Card
        sx={{
          flex: 1,
          borderRadius: '20px',
          overflow: 'hidden',
          backgroundColor: 'rgba(20, 20, 22, 0.88)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
          transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.35s ease',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-10px) scale(1.015)',
            boxShadow: `0 20px 56px ${color}55`,
          },
          '&:hover .service-accent-bar': {
            height: '8px',
          },
        }}
      >
        {/* Animated accent bar */}
        <Box
          className="service-accent-bar"
          sx={{
            height: '4px',
            backgroundColor: color,
            transition: 'height 0.35s ease',
            flexShrink: 0,
          }}
        />

        <Box sx={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          {/* Icon + title row */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', mb: '16px' }}>
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: '14px',
                backgroundColor: `${color}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '.MuiCard-root:hover &': {
                  backgroundColor: `${color}40`,
                  transform: 'rotate(-6deg) scale(1.1)',
                },
              }}
            >
              <Icon color={color} />
            </Box>

            <Typography
              style={berkleyFont.style}
              variant="h5"
              sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.92)', fontSize: '1.1rem', lineHeight: 1.3 }}
            >
              {title}
            </Typography>
          </Box>

          <Typography
            style={berkleyFont.style}
            variant="body1"
            sx={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '0.95rem', flexGrow: 1 }}
          >
            {description}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
