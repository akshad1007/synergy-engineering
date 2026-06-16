'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── FadeInView ────────────────────────────────────────
// Wraps any element with whileInView scroll-triggered animation.
// direction: 'up' | 'down' | 'left' | 'right' | 'none'
export function FadeInView({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  threshold = 0.15,
  once = true,
  className = '',
  as = 'div',
  ...rest
}) {
  const directionMap = {
    up:    { y: 24, x: 0 },
    down:  { y: -24, x: 0 },
    left:  { y: 0, x: -40 },
    right: { y: 0, x: 40 },
    none:  { y: 0, x: 0 },
  };
  const d = directionMap[direction] || directionMap.up;

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, x: d.x, y: d.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier — smooth, professional
      }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

// ─── StaggerContainer ──────────────────────────────────
// Parent that staggers its children's entrance animations.
export function StaggerContainer({
  children,
  stagger = 0.08,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  ...rest
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── StaggerItem ───────────────────────────────────────
// Must be used as direct child of StaggerContainer.
export function StaggerItem({
  children,
  direction = 'up',
  className = '',
  ...rest
}) {
  const directionMap = {
    up:    { y: 20, x: 0 },
    down:  { y: -20, x: 0 },
    left:  { y: 0, x: -30 },
    right: { y: 0, x: 30 },
    scale: { y: 0, x: 0, scale: 0.8 },
  };
  const d = directionMap[direction] || directionMap.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...d },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── CountUp ───────────────────────────────────────────
// Animated counter that counts from 0 → target on scroll-into-view.
export function CountUp({
  target,
  duration = 1.5,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = performance.now();
          const durationMs = duration * 1000;

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
}

// ─── AnimatedAccordion ─────────────────────────────────
// Smooth height transition for FAQ accordion panels.
export function AnimatedAccordion({ isOpen, children }) {
  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ overflow: 'hidden' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── RevealMask ────────────────────────────────────────
// Crop-reveals an image using inset clip-paths while scaling from 1.15 to 1.0.
export function RevealMask({ children, delay = 0, duration = 0.8, once = true, className = "" }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once, amount: 0.15 }}
        transition={{
          duration: duration + 0.2,
          delay,
          ease: [0.25, 1, 0.5, 1],
        }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─── ScrollRevealText ──────────────────────────────────
// Splits text into words and staggers their opacity from 0.15 to 1.0 when entering viewport.
export function ScrollRevealText({ text, className = "", delay = 0 }) {
  const words = text.split(' ');
  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0.15, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.35,
            delay: delay + idx * 0.025,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
