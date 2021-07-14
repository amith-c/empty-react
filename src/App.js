import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import './global-sass/theme.scss'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Work from './components/Work';
import { Cursor } from './animations/Cursor';
import Contact from './components/Contact';
import './firebase/config';
import ProjectView from './components/ProjectView';

function App() {

  const history = useHistory()

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)

    var cursor = new Cursor()
    cursor.initializeCursor()
    cursor.initializeTargets()
  }, [])

  function closeMenu(callback) {
    gsap.timeline()
      .to('.menu .head-2', { opacity: 0, duration: 0.3 })
      .to('.menu', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 0.6, ease: 'power4.inOut', onComplete: callback })
  }

  function openMenu() {
    gsap.timeline()
      .to('.menu', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', duration: 1, ease: 'power4.inOut' })
      .to('.menu .head-2', { opacity: 1, stagger: 0.1 })
  }

  return (
    <div className="App">

      {/* //TODO: Add route transitions */}
      {/* //TODO: Change navbar into all-screen menu */}
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/work'><Work /></Route>
        <Route exact path='/contact'><Contact /></Route>
        <Route exact path='/projects/:name'><ProjectView /></Route>
      </Switch>

      <button className="menu-button target" onClick={openMenu}><svg width="40" height="17" viewBox="0 0 40 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2H28.25M12.5 15H38" stroke="#ffb800" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      </button>

      <div className="menu">
        <div className="body-white">menu</div>

        <button className="close" onClick={closeMenu}>&times;</button>

        <nav>
          <div onClick={() => closeMenu(() => history.push('/'))} to='/'><div className="head-2 target">home</div></div>
          <div onClick={() => closeMenu(() => history.push('/work'))} to='/work'><div className="head-2 target">work</div></div>
          {/* <div onClick={() => closeMenu(() => history.push('/about'))} to='/about'><div className="head-2 target">about</div></div> */}
          <div onClick={() => closeMenu(() => history.push('/contact'))} to='/contact'><div className="head-2 target">contact</div></div>
        </nav>
      </div>

      <div className="cursor-wrapper"></div>
      <div className="cursor"></div>
    </div>
  );
}

export default App;
