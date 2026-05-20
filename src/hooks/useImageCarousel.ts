"use client";
import { useCallback, useEffect, useRef, useState } from "react";

export function useImageCarousel(total: number, initial = 0) {
  const [index, setIndex] = useState(initial);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const goPrev = useCallback(
    () => setIndex((i) => Math.max(0, i - 1)),
    []
  );
  const goNext = useCallback(
    () => setIndex((i) => Math.min(total - 1, i + 1)),
    [total]
  );
  const select = useCallback((i: number) => setIndex(i), []);

  useEffect(() => {
    thumbnailRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  const setThumbRef = useCallback(
    (i: number) => (el: HTMLDivElement | null) => {
      thumbnailRefs.current[i] = el;
    },
    []
  );

  return { index, total, goPrev, goNext, select, setThumbRef, setIndex };
}
