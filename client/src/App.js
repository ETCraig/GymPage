import React, { Fragment } from 'react';
import './App.css';

import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import NavBar from './components/layout/NavBar';
import Register from './components/auth/Register';

import AuthState from './context/auth/AuthState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          <NavBar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AuthState>
  );
}

export default App;