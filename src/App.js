import React from 'react';
import './App.css';

import Footer from './components/footer/footer.component';
import HomeFeed from './pages/home-feed/home-feed.component';
import landing from './pages/landing/landing.component';
import Login from './pages/login/login.component';
import Navbar from './components/navbar/navbar.component';
import Register from './pages/register/register.component';

import PrivateRoute from './utils/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/SetAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

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
      <Footer />
    </div>
  );
}

export default App;