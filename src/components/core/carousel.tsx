
'use client';

import React, { ReactNode, useRef } from 'react';
import { Box, styled, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const CarouselContainer = styled(Box)(() => ({
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    padding: '20px 0',
    width: '100%',
    '&::-webkit-scrollbar': {
        display: 'none',
    },
    scrollbarWidth: 'none',
}));

const CarouselItem = styled(Box)(() => ({
    scrollSnapAlign: 'center',
    flexShrink: 0,
    width: '99vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}));

interface CarouselProps {
    children: ReactNode;
    className?: string;
}

export default function Carousel({ children, className }: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(false);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            // Allow a small buffer (e.g., 1px) for float calculation discrepancies
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    React.useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = window.innerWidth;
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            // We need to check scroll again after the smooth scroll finishes, but since smooth scroll 
            // is async and doesn't provide a callback, relying on the onScroll event is better.
        }
    };

    return (
        <Box sx={{ position: 'relative', width: '100%' }} className={className}>
            {canScrollLeft && (
                <IconButton
                    onClick={() => handleScroll('left')}
                    sx={{
                        position: 'absolute',
                        left: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                    }}
                >
                    <ChevronLeft />
                </IconButton>
            )}

            <CarouselContainer ref={containerRef} onScroll={checkScroll}>
                {React.Children.map(children, (child, index) => (
                    <CarouselItem key={index}>
                        {child}
                    </CarouselItem>
                ))}
            </CarouselContainer>

            {canScrollRight && (
                <IconButton
                    onClick={() => handleScroll('right')}
                    sx={{
                        position: 'absolute',
                        right: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 2,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0,0,0,0.7)',
                        },
                    }}
                >
                    <ChevronRight />
                </IconButton>
            )}
        </Box>
    );
}
