import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Projects from './Components/Projects';
import About from './Components/About';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar';

function App() {
  const user = 'Victor';
  
  return (
    <div class="page">
      <Router>
          <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          <Header />
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
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
