"use client";

import {
  HTMLImgComparisonSliderElement,
  ImgComparisonSlider,
} from "@img-comparison-slider/react";
import "../styles/image-comparison.css";
import { RefObject, useEffect, useRef } from "react";

type imgProps = {
  urlBefore: string;
  urlAfter: string;
};

export default function MainImageComparison({ urlBefore, urlAfter }: imgProps) {
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
          img.style.objectFit = "cover"; // optional: fill the area without distorting the image.
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
        // Shadow element's style tag.
        const STYLE_TAG = _style as HTMLElement | undefined;
        if (STYLE_TAG) {
          // Style for the img-comparison-slider's line handler.
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
        <img slot="first" src={urlBefore} />
        <img slot="second" src={urlAfter} />
      </ImgComparisonSlider>
    </div>
  );
}
