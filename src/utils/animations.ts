import { gsap } from 'gsap';

export const shouldReduceMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const fadeIn = (
  element: HTMLElement | HTMLElement[] | null,
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    stagger?: number;
  } = {}
) => {
  if (!element || shouldReduceMotion()) {
    if (element) {
      gsap.set(element, { opacity: 1, y: 0 });
    }
    return;
  }

  const {
    duration = 0.6,
    delay = 0,
    y = 20,
    stagger = 0.1
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: 'power2.out',
    }
  );
};

export const slideIn = (
  element: HTMLElement | HTMLElement[] | null,
  options: {
    duration?: number;
    delay?: number;
    x?: number;
    stagger?: number;
  } = {}
) => {
  if (!element || shouldReduceMotion()) {
    if (element) {
      gsap.set(element, { opacity: 1, x: 0 });
    }
    return;
  }

  const {
    duration = 0.6,
    delay = 0,
    x = -30,
    stagger = 0.08
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      x: x,
    },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
    }
  );
};

export const scaleIn = (
  element: HTMLElement | HTMLElement[] | null,
  options: {
    duration?: number;
    delay?: number;
    scale?: number;
    stagger?: number;
  } = {}
) => {
  if (!element || shouldReduceMotion()) {
    if (element) {
      gsap.set(element, { opacity: 1, scale: 1 });
    }
    return;
  }

  const {
    duration = 0.5,
    delay = 0,
    scale = 0.95,
    stagger = 0.1
  } = options;

  gsap.fromTo(
    element,
    {
      opacity: 0,
      scale: scale,
    },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'back.out(1.2)',
    }
  );
};
