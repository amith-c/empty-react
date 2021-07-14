import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { RouteTransitions } from './RouteTransitions';

class WorkAnim {

    constructor() {
        gsap.registerPlugin(ScrollTrigger)
        this.transition = new RouteTransitions()
    }

    intro() {
        this.transition.enterTransition('work', () => {
            gsap.timeline()
                .to('.work .head-1 span', { translateY: 0, opacity: 1 })
                .to('.work .head-1 span', { backgroundSize: '100% 40%' }, 0.3)
                .to('.work .body-black', { opacity: 1, translateY: 0 }, 0.6)

            var cards = document.querySelectorAll('.card')

            cards.forEach(card => {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 80%',
                    animation: gsap.to('.work .card', { opacity: 1 })
                })
            })
        })
    }

}

export { WorkAnim }