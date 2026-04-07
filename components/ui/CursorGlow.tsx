"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: -9999, y: -9999 });
    const raf = useRef<number | null>(null);

    useEffect(() => {
        // 1. Accessibility & Device Checks
        if (
            typeof window === "undefined" ||
            window.matchMedia("(pointer: coarse)").matches ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;

        const el = glowRef.current;
        if (!el) return;

        const onMove = (e: MouseEvent) => {
            pos.current = { x: e.clientX, y: e.clientY };
        };

        const tick = () => {
            if (el) {
                // Using transform instead of top/left for smoother performance (sub-pixel rendering)
                el.style.transform = `translate3d(calc(${pos.current.x}px - 50%), calc(${pos.current.y}px - 50%), 0)`;
            }
            raf.current = requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        raf.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", onMove);
            if (raf.current !== null) cancelAnimationFrame(raf.current);
        };
    }, []);

    return (
        <>
            <style jsx global>{`
        :root {
          --cursor-glow-color: rgba(16, 185, 129, 0.15);
          --cursor-glow-outer: rgba(16, 185, 129, 0.05);
          --cursor-blend-mode: multiply; /* Better for light mode */
        }

        .dark {
          --cursor-glow-color: rgba(52, 211, 153, 0.2);
          --cursor-glow-outer: rgba(52, 211, 153, 0.05);
          --cursor-blend-mode: screen; /* Better for dark mode */
        }
      `}</style>
            <div
                ref={glowRef}
                aria-hidden="true"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "500px",
                    height: "500px",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9998,
                    background: `radial-gradient(circle, var(--cursor-glow-color) 0%, var(--cursor-glow-outer) 35%, transparent 70%)`,
                    mixBlendMode: "var(--cursor-blend-mode)" as any,
                    willChange: "transform",
                }}
            />
        </>
    );
}