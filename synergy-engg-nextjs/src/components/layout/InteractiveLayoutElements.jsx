'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function InteractiveLayoutElements() {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // 1. Device check for hover capabilities
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsMobile(!mediaQuery.matches);

    // 2. Loading progress counter (0 -> 100 in 700ms, then 100ms fade)
    let start = null;
    const duration = 700;
    
    const animateLoader = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const pct = Math.min(Math.floor((progress / duration) * 100), 100);
      setPercent(pct);
      
      if (progress < duration) {
        requestAnimationFrame(animateLoader);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 100);
      }
    };
    
    requestAnimationFrame(animateLoader);

    // 3. Magnetic Custom Cursor
    if (mediaQuery.matches) {
      const handleMouseMove = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };

      const handleMouseOver = (e) => {
        const target = e.target;
        if (!target) return;
        const clickable = target.closest('a, button, input[type="submit"], input[type="button"], select, [role="button"]');
        if (clickable) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleMouseOver);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseover', handleMouseOver);
      };
    }
  }, []);

  // Smooth follow animation for the outer ring
  useEffect(() => {
    if (isMobile) return;
    
    let ringFrame;
    const followCursor = () => {
      setRingPos((prev) => {
        const dx = cursorPos.x - prev.x;
        const dy = cursorPos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      ringFrame = requestAnimationFrame(followCursor);
    };
    
    ringFrame = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(ringFrame);
  }, [cursorPos, isMobile]);

  return (
    <>
      {/* 1. Loader Sequence Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-[#060E1A] z-[99999] flex flex-col items-center justify-center transition-opacity duration-300">
          <div className="space-y-8 flex flex-col items-center max-w-xs w-full px-6">
            {/* Synergy Logo Fade */}
            <div className="relative w-48 h-20 animate-pulse">
              <Image
                src="/screenshots/logo_synergy.png"
                alt="Synergy Logo"
                fill
                className="object-contain filter brightness-110"
                priority
              />
            </div>
            
            {/* Loading Bar & Stats Counter */}
            <div className="w-full space-y-2">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] font-mono text-[#79849b]">
                <span>Initializing System</span>
                <span className="text-[#C8232A] font-bold">{percent}%</span>
              </div>
              <div className="w-full h-[3px] bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#C8232A] transition-all duration-75 ease-out" 
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Custom Magnetic Cursor */}
      {!isMobile && (
        <div className={isHovering ? 'custom-cursor-hover' : ''}>
          <div 
            className="custom-cursor-dot" 
            style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          />
          <div 
            className="custom-cursor-ring" 
            style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }}
          />
        </div>
      )}
    </>
  );
}
