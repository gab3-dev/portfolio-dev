'use client';

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import '../styles/image-comparison.css';
import { useEffect, useRef } from 'react';

export default function MainImageComparison() {
    const sliderRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = sliderRef.current;
        if (!el) return;

        const waitForSecondSlot = () => {
            const shadow = el.shadowRoot;
            if (!shadow) {
                requestAnimationFrame(waitForSecondSlot);
                return;
            }

            const secondSlot = shadow.querySelector('#second') as HTMLSlotElement | null;

            if (secondSlot) {
                console.log('Second slot found:', secondSlot);
                const img = secondSlot as HTMLElement | undefined;
                if (img) {
                    img.style.height = '100%';
                    img.style.objectFit = 'cover'; // opcional: faz a imagem preencher sem distorcer
                }
            } else {
                requestAnimationFrame(waitForSecondSlot);
            }
        };

        waitForSecondSlot();
    }, []);

    return (
        <div className="w-full h-full">
            <ImgComparisonSlider ref={sliderRef as any} className="w-full h-full" style={{ height: '100%' }}>
                <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
                <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
            </ImgComparisonSlider>
        </div>
    );
}