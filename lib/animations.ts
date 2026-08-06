import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export const animateOnScroll = (
  element: HTMLElement | null,
  options: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) => {
  if (!element) return;

  gsap.fromTo(element, options.from || {}, {
    ...options.to,
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      ...options.scrollTrigger,
    },
  });
};

export const staggerReveal = (
  elements: HTMLElement[] | NodeListOf<Element> | null,
  options: {
    duration?: number;
    stagger?: number;
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
  } = {}
) => {
  if (!elements || elements.length === 0) return;

  const {
    duration = 0.8,
    stagger = 0.1,
    from = { opacity: 0, y: 30 },
    to = { opacity: 1, y: 0 },
  } = options;

  gsap.fromTo(elements, from, {
    ...to,
    duration,
    stagger,
    ease: 'power2.out',
  });
};

export const parallaxScroll = (
  element: HTMLElement | null,
  distance: number = -100
) => {
  if (!element) return;

  gsap.to(element, {
    y: distance,
    scrollTrigger: {
      trigger: element,
      start: 'top center',
      end: 'bottom center',
      scrub: 0.5,
      markers: false,
    },
  });
};

export const magneticCursor = (
  element: HTMLElement | null,
  options: {
    distance?: number;
    returnDuration?: number;
  } = {}
) => {
  if (!element) return;

  const { distance = 50, returnDuration = 0.5 } = options;

  element.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const distance_val = Math.sqrt(x * x + y * y);
    const max_distance = Math.sqrt(
      (rect.width / 2) ** 2 + (rect.height / 2) ** 2
    );

    if (distance_val < distance) {
      gsap.to(element, {
        x: (x / max_distance) * distance,
        y: (y / max_distance) * distance,
        duration: 0.4,
        overwrite: 'auto',
      });
    }
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: returnDuration,
      overwrite: 'auto',
    });
  });
};

export const floatingAnimation = (element: HTMLElement | null, duration = 4) => {
  if (!element) return;

  gsap.to(element, {
    y: -20,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
};
