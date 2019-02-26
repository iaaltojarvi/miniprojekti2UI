import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppNavigation from './components/AppNavigation';
import SelectionView from './components/SelectionView';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavigation />
          <Switch>
            <Route exact path='/' component={SelectionView} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
