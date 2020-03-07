import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Login from './pages/login/login.component';
import Register from './pages/register/register.component';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
        </Switch>
    );
}

export default Routes;