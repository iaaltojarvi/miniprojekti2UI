import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppNavigation from './components/appNavigation/AppNavigation';
import SelectionView from './components/selectionView/SelectionView';
import LoginForm from './components/appNavigation/LoginForm';
import SignupForm from './components/appNavigation/SignupForm';
import Profile from './components/appNavigation/Profile';
import DiscussionView from './components/discussionView/DiscussionView';
import PageNotFound from './components/PageNotFound';
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
            <Route path='/discussion/:id' component={ DiscussionView } />
            <Route path='**' component={ PageNotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
