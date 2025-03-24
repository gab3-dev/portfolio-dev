'use client';

import { cn } from '@/lib/utils';
import React, {
    useRef,
    useState,
    MouseEvent,
    useContext,
    createContext,
} from 'react';

interface SpotlightProps {
    children: React.ReactNode;
    className?: string;
    ProximitySpotlight?: boolean;
    HoverFocusSpotlight?: boolean;
    CursorFlowGradient?: boolean;
}
interface SpotlightItemProps {
    children: React.ReactNode;
    className?: string;
}

interface SpotLightContextType {
    ProximitySpotlight: boolean;
    HoverFocusSpotlight: boolean;
    CursorFlowGradient: boolean;
}

export const Spotlight = ({
    children,
    className,
}: SpotlightProps) => {
    return (
        <div className={cn(
            className,
            'group relative z-10 rounded-md flex flex-col items-center justify-center overflow-hidden w-full'
        )}>
            {children}
        </div>
    );
};

export function SpotLightItem({ children }: SpotlightItemProps) {
    const boxWrapper = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = React.useState({
        x: null,
        y: null,
    });
    React.useEffect(() => {
        const updateMousePosition = (ev: { clientX: any; clientY: any }) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
    const handleMouemove = ({ currentTarget, clientX, clientY }: MouseEvent<HTMLDivElement>) => {
        let { left, top } = currentTarget.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        setOverlayColor({ x, y });
    };

    return (
        <div className='relative rounded-md w-full'>
            <div
                onMouseMove={handleMouemove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                ref={boxWrapper}
                className={cn(
                    'group relative rounded-[20px] p-[2px] bg-[#eeeeee15] overflow-hidden w-full mx-auto'
                )}
            >
                {isHovered && (
                    <div
                        className='pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 '
                        style={{
                            background: `radial-gradient(
                                250px circle at ${overlayColor.x}px ${overlayColor.y}px,
                              rgba(255, 255, 255, 0.137),
                                transparent 80%
                            )`,
                        }}
                    />
                )}

                <div
                    className='absolute inset-0 z-0 bg-fixed rounded-[20px]'
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff6e 0%,transparent 20%,transparent) fixed`,
                    }}
                ></div>

                <div className="relative text-center z-10 rounded-[20px] w-fit bg-cover bg-black w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
};

export function SpotlightCard({
    children,
    className = '',
}: SpotlightCardProps) {
    return (
        <div
            className={`relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}