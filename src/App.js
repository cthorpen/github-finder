import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import User from './components/users/User';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

    return (
      <GithubState>
        <AlertState>
            <Router>
            <div className='App'>
              <Navbar title="Github Finder!" icon="fab fa-github" />

              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/about' element={<About/>} />
                  <Route exact path='/user/:login' element={<User/>} />
                  <Route element={<NotFound/>} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
      
    );

}

export default App;
