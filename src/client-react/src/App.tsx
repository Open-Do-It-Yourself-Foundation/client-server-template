import React from 'react';
import {  BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

const App:React.FC=()=> {
  return (
    <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/'}> Home </Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
          
          <Route path={'/'} exact component={Home} />
         
        </Switch>
      </Router>
  );
}

export default App;
