import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import ProjectsList from './components/ProjectsList'
import './App.css';

function App() {
  return (
    <div className="App">

      <ul className='header'>
        <li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
        <li><NavLink activeClassName='active' to='/projects'>Projects</NavLink></li>
      </ul>

      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={ProjectsList} />
        {/* <Route exact path='/project/:id' component={Project} /> */}
      </Switch>

      <p>coucou</p>
    </div>
  );
}

export default App;
