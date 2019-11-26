import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Product } from './containers/Product';
import { Login } from './containers/Login';
import { NotFound } from './containers/NotFound';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const theme = createMuiTheme({
  palette: {
    primary: red,
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export { App };
