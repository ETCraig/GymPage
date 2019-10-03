import React, { Fragment } from 'react';
import './App.css';

import Footer from './components/layout/Footer';
import NavBar from './components/layout/NavBar';

import AlertState from './context/alerts/AlertState';
import AuthState from './context/auth/AuthState';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ExerciseState from './context/exercise/ExerciseState';
import StoreState from './context/store/StoreState';
import ProfileState from './context/profile/ProfileState';
import RoutineState from './context/routine/RoutineState';
import Routes from './Routes';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ProfileState>
          <RoutineState>
            <ExerciseState>
              <StoreState>
                <Router>
                  <Fragment>
                    <NavBar />
                    <div className="App">
                      <Switch>
                        <Route component={Routes} />
                      </Switch>
                      <div className="footer-app-wrapper">
                        <Footer />
                      </div>
                    </div>
                  </Fragment>
                </Router>
              </StoreState>
            </ExerciseState>
          </RoutineState>
        </ProfileState>
      </AlertState>
    </AuthState>
  );
}

export default App;