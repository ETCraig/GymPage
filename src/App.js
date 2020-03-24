import React, { lazy, Suspense } from 'react';
import './App.css';

import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';
import Spinner from './components/spinner/spinner.component';

import PrivateRoute from './utils/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import setAuthToken from './utils/SetAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const LandingPage = lazy(() => import('./pages/landing/landing.component'));
const LoginPage = lazy(() => import('./pages/login/login.component'));
const RegisterPage = lazy(() => import('./pages/register/register.component'));
const HomePage = lazy(() => import('./pages/home-feed/home-feed.component'));
const MusclesPage = lazy(() => import('./pages/muscles/muscles.component'));
const MusclePage = lazy(() => import('./pages/muscle/muscle.component'));
const ExercisePage = lazy(() => import('./pages/exercise/exercise.component'));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/muscles" component={MusclesPage} />
          <PrivateRoute exact path="/muscles/:muscle" component={MusclePage} />
          <PrivateRoute exact path="/muscle/:muscle/:exercise" component={ExercisePage} />
        </Suspense>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;