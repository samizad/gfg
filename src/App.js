import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Product } from './containers/Product';
import { Login } from './containers/Login';
import { NotFound } from './containers/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/product" component={Product} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export { App };
