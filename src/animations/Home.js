import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

class HomeAnim {

    constructor() {
        gsap.registerPlugin(ScrollTrigger);
    }

    intro() {
        gsap.timeline()
        .to('.banner__title .line span', { translateY: 0, opacity: 1, stagger: 0.1 })
        .to('.banner__title .highlight', { backgroundSize: '100% 40%', duration: 1, ease: 'power4.inOut' }, 0.3)
        .to('.banner .body-grey', { translateY: 0, opacity: 1 }, 0.7)
        .to('.banner .cta__main', { opacity: 1 }, 1)

        ScrollTrigger.create({
            trigger: '.intro .head-1', 
            animation: gsap.timeline().to('.intro .head-1 span', { translateY: 0, opacity: 1 }).to('.intro .head-1 span', { backgroundSize: '100% 40%' }),
            start: 'top 80%'
        })

        ScrollTrigger.create({
            trigger: '.intro .row', 
            animation: gsap.timeline().to('.intro .body-grey', { translateY: 0, opacity: 1 }).to('.intro svg', { opacity: 1 }, 0),
            start: 'top 80%'
        })

        ScrollTrigger.create({
            trigger: '.pitch .row', 
            animation: gsap.timeline().to('.pitch .head-1 span', { translateY: 0, opacity: 1 }).to('.pitch .head-1 span', { backgroundSize: '100% 40%' }, 0.3).to('.pitch .body-grey', { translateY: 0, opacity: 1 }, 0.5),
            start: 'top 80%'
        })

        ScrollTrigger.create({
            trigger: '.services .head-1', 
            animation: gsap.timeline().to('.services .head-1 span', { translateY: 0, opacity: 1 }).to('.services .head-1 span', { backgroundSize: '100% 40%' }, 0.3),
            start: 'top 80%'
        })
    }
}

export { HomeAnim }