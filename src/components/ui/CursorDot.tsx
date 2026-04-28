'use client';

import { useEffect, useRef } from 'react';

export function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReduced) return;

    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = '1';

    let raf: number;
    let x = -100;
    let y = -100;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      if (dot) {
        dot.style.transform = `translate(${x}px, ${y}px)`;
      }
      raf = requestAnimationFrame(render);
    };

    const onEnterInteractive = () => {
      dot?.classList.add('cursor-dot--hover');
    };
    const onLeaveInteractive = () => {
      dot?.classList.remove('cursor-dot--hover');
    };

    const attachListeners = () => {
      document
        .querySelectorAll('a, button, [role="button"]')
        .forEach((el) => {
          el.addEventListener('mouseenter', onEnterInteractive);
          el.addEventListener('mouseleave', onLeaveInteractive);
        });
    };

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(render);
    attachListeners();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #e8693a;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          margin-left: -4px;
          margin-top: -4px;
          transition: width 0.15s ease, height 0.15s ease, margin 0.15s ease, background 0.15s ease;
          will-change: transform;
        }
        .cursor-dot--hover {
          width: 14px;
          height: 14px;
          margin-left: -7px;
          margin-top: -7px;
          background: rgba(232, 105, 58, 0.4);
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-dot { display: none; }
        }
      `}</style>
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
