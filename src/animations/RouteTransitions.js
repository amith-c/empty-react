import { gsap } from 'gsap';

class RouteTransitions {
    enterTransition(currentPath, callback) {
        switch (currentPath) {
            case 'home':
                gsap.to('.home', { opacity: 1, onComplete: callback })
                break;

            case 'work':
                gsap.to('.work', { opacity: 1, onComplete: callback })
                break;

            default:
                break;
        }
    }

    exitTransition(currentPath, callback) {
        switch (currentPath) {
            case 'home':
                gsap.to('.home', { opacity: 0, onComplete: callback })
                break;

            case 'work':
                gsap.to('.work', { opacity: 0, onComplete: callback })
                break;

            default:
                break;
        }
    }
}

export { RouteTransitions }