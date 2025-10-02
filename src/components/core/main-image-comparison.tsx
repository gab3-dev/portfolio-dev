"use client";

import {
    HTMLImgComparisonSliderElement,
    ImgComparisonSlider,
} from "@img-comparison-slider/react";
import "../styles/image-comparison.css";
import { RefObject, useEffect, useRef } from "react";

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

            const secondSlot = shadow.querySelector(
                "#second",
            ) as HTMLSlotElement | null;

            if (secondSlot) {
                console.log("Second slot found:", secondSlot);
                const img = secondSlot as HTMLElement | undefined;
                if (img) {
                    img.style.height = "100%";
                    img.style.objectFit = "cover"; // opicional: faz a imagem preencher sem distorcer
                }
            } else {
                requestAnimationFrame(waitForSecondSlot);
            }
        };

        const waitForDivider = () => {
            const shadow = el.shadowRoot;
            if (!shadow) {
                requestAnimationFrame(waitForDivider);
                return;
            }

            const _style = shadow.querySelector("style");

            if (_style) {
                // Tag de estilo do shadow element.
                const STYLE_TAG = _style as HTMLElement | undefined;
                if (STYLE_TAG) {
                    // Estilo para a linha do handler do img-comparison-slider
                    STYLE_TAG.innerHTML +=
                        ".divider::after { width: 3px; background: black; border: 1px white solid; }";
                }
            } else {
                requestAnimationFrame(waitForDivider);
            }
        };

        waitForSecondSlot();
        waitForDivider();
    }, []);

    return (
        <div className="w-full h-full">
            <ImgComparisonSlider
                ref={sliderRef as RefObject<HTMLImgComparisonSliderElement | null>}
                className="w-full h-full"
                style={{ height: "100%" }}
            >
                <img slot="first" src="/projects/geo_new.png" />
                <img slot="second" src="/projects/geo_old.png" />
            </ImgComparisonSlider>
        </div>
    );
}
