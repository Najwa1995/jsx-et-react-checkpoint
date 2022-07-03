import { Fragment } from 'react';
import Navs from './compenent/Navs/nav';
import Home from './compenent/home/home';
import Projects from './compenent/projects/project';
import Contact from './compenent/contact/contact';
import './App.css';

function App() {
  return (
    <Fragment>
      <Navs />
      <Home />
      <Contact />
      <Projects />
    </Fragment>
  );
}

export default App;
