import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import './global-sass/theme.scss'
import ScrollTrigger from 'gsap/ScrollTrigger';
import Work from './components/Work';

function App() {

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/work'><Work /></Route>
      </Switch>

      <header>
        <Link className='logo' to='/'>AMITH C</Link>

        <nav>
          <NavLink activeStyle={{ borderBottom: '2px solid' }} to='/work'>WORK</NavLink>
          <NavLink activeStyle={{ borderBottom: '2px solid' }} to='/about'>ABOUT</NavLink>
          <NavLink activeStyle={{ borderBottom: '2px solid' }} to='/process'>PROCESS</NavLink>
          <NavLink activeStyle={{ borderBottom: '2px solid' }} to='/contact'>CONTACT</NavLink>
        </nav>

        <button className="menu-button"><svg width="40" height="17" viewBox="0 0 40 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2H28.25M12.5 15H38" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        </button>
      </header>
    </div>
  );
}

export default App;
