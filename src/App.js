import React, { lazy, Suspense } from 'react';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import { checkUserSession } from './redux/auth/auth.actions';
import { selectCurrentUser } from './redux/auth/auth.selector';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
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