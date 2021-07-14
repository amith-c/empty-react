import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class ProjectViewAnim {

    constructor() {
        gsap.registerPlugin(ScrollTrigger)
    }

    coverPage() {
        ScrollTrigger.create({
            trigger: '.cover-page',
            animation: gsap.to('.cover-page', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1.5, ease: 'power4.inOut' })
        })
    }

    setScrollTriggers() {
        
    }
}

export { ProjectViewAnim }