/**
 * Animation Utilities for Stewart Striping
 * Provides CSS-in-JS animations and Intersection Observer hooks
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * Custom hook for scroll-based animations
 */
export function useScrollAnimation() {
  if (typeof window === 'undefined') return { ref: null, inView: true };
  
  const ref = { current: null };
  const inView = true;
  
  return { ref, inView };
}

/**
 * Counter animation for statistics
 */
export function animateCounter(
  element: HTMLElement,
  start: number,
  end: number,
  duration: number = 2000
) {
  const startTime = Date.now();
  const endTime = startTime + duration;

  function update() {
    const now = Date.now();
    const progress = Math.min((now - startTime) / duration, 1);
    const current = Math.floor(start + (end - start) * progress);
    
    element.textContent = current.toString();
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/**
 * Scroll reveal animation classes
 */
export const scrollRevealClasses = {
  container: 'scroll-reveal-container',
  item: 'scroll-reveal-item',
  visible: 'scroll-reveal-visible'
};

/**
 * Initialize scroll reveal animations
 */
export function initScrollReveal() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(scrollRevealClasses.visible);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );

  document.querySelectorAll('.scroll-reveal-item').forEach((element) => {
    observer.observe(element);
  });

  return () => observer.disconnect();
}

/**
 * Parallax scroll effect
 */
export function parallaxScroll(element: HTMLElement, speed: number = 0.5) {
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * speed;
    element.style.transform = `translate3d(0, ${rate}px, 0)`;
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}

/**
 * Typing animation effect
 */
export function typeWriter(
  element: HTMLElement,
  text: string,
  speed: number = 50
) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
