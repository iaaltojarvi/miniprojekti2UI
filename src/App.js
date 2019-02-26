import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppNavigation from './components/appNavigation/AppNavigation';
import SelectionView from './components/Selectionview/SelectionView';
import LoginForm from './components/appNavigation/LoginForm';
import SignupForm from './components/appNavigation/SignupForm';
import Profile from './components/appNavigation/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavigation />
          <Switch>
            <Route exact path='/' component={ SelectionView } />
            <Route path='/login' component={ LoginForm } />
            <Route path='/signup' component={ SignupForm } />
            <Route path='/profile' component={ Profile } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
