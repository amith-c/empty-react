import { gsap } from 'gsap';

class Cursor {
    initializeCursor() {
        if ('ontouchstart' in window) {
            return
        } else {
            document.querySelector(".App").addEventListener('mouseenter', () => {
                gsap.to('.cursor-wrapper, .cursor', { opacity: 1 })
            })

            document.querySelector(".App").addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    // console.log(e);
                    gsap.to('.cursor', { top: e.clientY, left: e.clientX, duration: 0.3 })
                    gsap.to('.cursor-wrapper', { top: e.clientY, left: e.clientX })
                })
            })
        }
    }

    initializeTargets() {
        if ('ontouchstart' in window) {
            return
        } else {
            var targets = document.querySelectorAll('.target')

            targets.forEach(target => {
                target.addEventListener('mouseenter', () => {
                    gsap.to('.cursor-wrapper', { opacity: 0 })
                    gsap.to('.cursor', { scale: 4, opacity: 0.5 })
                })

                target.addEventListener('mouseleave', () => {
                    gsap.to('.cursor-wrapper', { opacity: 1 })
                    gsap.to('.cursor', { scale: 1, opacity: 1 })
                })
            })
        }
    }
}

export { Cursor }