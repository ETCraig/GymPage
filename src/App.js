import React from 'react';
import './App.css';

import HomeFeed from './pages/home-feed/home-feed.component';
import landing from './pages/landing/landing.component';
import Login from './pages/login/login.component';
import Navbar from './components/navbar/navbar.component';
import Register from './pages/register/register.component';

import PrivateRoute from './utils/PrivateRoute';

import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/home" component={HomeFeed} />
      </Switch>
    </div>
  );
}

export default App;