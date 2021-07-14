import { gsap } from 'gsap';

class ContactAnim {
    intro() {
        gsap.timeline()
        .to('.contact', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1, ease: 'power4.inOut' })
    }
}

export { ContactAnim }