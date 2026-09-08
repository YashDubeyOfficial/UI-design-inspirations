import { useEffect, useRef } from "react";

/**
 * Auto-centers the active pill inside a horizontally scrollable bar.
 * Centers instantly on first mount, smooth-scrolls when `dep` changes
 * (e.g. route pathname). Shared by CategoryBar and StyleBar.
 */
export function useCenterActive<T extends HTMLElement>(dep: unknown) {
  const barRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<T>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    const bar = barRef.current;
    const active = activeRef.current;
    if (!bar || !active) return;
    const target = active.offsetLeft - bar.clientWidth / 2 + active.offsetWidth / 2;
    const left = Math.max(0, Math.min(target, bar.scrollWidth - bar.clientWidth));
    bar.scrollTo({ left, behavior: firstRender.current ? "auto" : "smooth" });
    firstRender.current = false;
  }, [dep]);

  return { barRef, activeRef };
}
