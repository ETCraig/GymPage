import React from 'react';

import CreateProfile from './components/profile-form/CreateProfile';
import Dashboard from './components/dashboard/Dashboard';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import NotFound from './components/layout/NotFound';
import UserProfile from './components/profile/UserProfile';
import Register from './components/auth/Register';

import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

const Routes = () => {
    return (
        <section className="container">
            <Switch>
                <Route exact path="/home" component={Landing} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path='/profile' component={UserProfile} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
}

export default Routes;