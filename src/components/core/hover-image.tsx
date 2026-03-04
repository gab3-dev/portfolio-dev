"use client"

import { animate } from 'animejs';
import { useRef, useState } from "react";

export default function HoverImage({ name, alt, height, width, style }: { name: string, alt: string, height: number, width: number, style?: React.CSSProperties }) {
    const imgRef = useRef<HTMLImageElement>(null);
    const animationRef = useRef<ReturnType<typeof animate> | null>(null);
    const [isHovered, setIsHovered] = useState(false);
    const minResponsiveWidth = Math.round(width * 0.64);
    const viewportResponsiveWidth = Math.round(width * 0.8);
    const responsiveWidth = `clamp(${minResponsiveWidth}px, ${viewportResponsiveWidth / 10}vw, ${width}px)`;

    const handleMouseEnter = () => {
        if (!imgRef.current) return;
        setIsHovered(true);
        animationRef.current?.pause();
        animationRef.current = animate(imgRef.current, {
            y: -20,
            duration: 1200,
            ease: 'inOutSine',
            loop: true,
            alternate: true,
        });
    };

    const handleMouseLeave = () => {
        if (!imgRef.current) return;
        setIsHovered(false);
        animationRef.current?.pause();
        animationRef.current = animate(imgRef.current, {
            y: 0,
            duration: 500,
            ease: 'outSine',
        });
    };

    return (
        <div style={style}>
            <img
                ref={imgRef}
                src={`/home/${name}_${isHovered ? 'hover' : 'default'}.svg`}
                height={height}
                width={width}
                alt={alt}
                className="logo"
                style={{
                    width: responsiveWidth,
                    height: 'auto',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
        </div>
    );
};
