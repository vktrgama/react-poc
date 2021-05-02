import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';
import Notes from './Components/Notes';
import About from './Components/About';

function App() {
  const user = 'Victor';
  
  return (
    <div class="page">
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <Dashboard user={user} />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
            <Route path="/movies">
              <Projects />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
