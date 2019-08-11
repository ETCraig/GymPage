import React, { Fragment } from 'react';
import './App.css';

import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import NavBar from './components/layout/NavBar';

import AuthState from './context/auth/AuthState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProfileState from './context/profile/ProfileState';
import Routes from './Routes';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ProfileState>
        <Router>
          <Fragment>
            <NavBar />
            <div className="App">
              <Switch>
                <Route component={Routes} />
              </Switch>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </ProfileState>
    </AuthState>
  );
}

export default App;