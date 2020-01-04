import React, { useEffect, lazy, Suspense } from 'react';
import './App.css';

import ErrorHandler from './components/error-handler/error-handler.component';
import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';

import { checkUserSession } from './redux/auth/auth.actions';
import { selectCurrentUser } from './redux/auth/auth.selector';
import PrivateRoute from './utils/PrivateRoute';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect, Switch } from 'react-router-dom';

const AuthContainer = lazy(() => import('./pages/auth-container/auth-container.component'));
const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const Dashboard = lazy(() => import('./pages/dashboard/dashboard.component'));

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <Header />
      <Switch>
        <ErrorHandler>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <PrivateRoute path='/dashboard' auth={currentUser} component={Dashboard} />
            <Route exact path="/SignIn" render={() => currentUser ? <Redirect to="/dashboard" /> : <AuthContainer />} />
          </Suspense>
        </ErrorHandler>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);