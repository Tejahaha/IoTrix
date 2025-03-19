"use client"

import { useEffect } from 'react';

type AnimationDirection = 'left' | 'right' | 'up' | 'down';

interface UseAnimateOnScrollOptions {
  threshold?: number;
  direction?: AnimationDirection;
  rootMargin?: string;
  once?: boolean;
}

export function useAnimateOnScroll(
  selector: string,
  {
    threshold = 0.1,
    direction = 'up',
    rootMargin = '0px',
    once = true,
  }: UseAnimateOnScrollOptions = {}
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add(`animate-fade-in-${direction}`);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            entry.target.classList.remove(`animate-fade-in-${direction}`);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, threshold, direction, rootMargin, once]);
}