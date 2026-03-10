// gsap-setup.ts — Centralized GSAP plugin registration
// Import this file once; all components just import { gsap, ScrollTrigger }
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
