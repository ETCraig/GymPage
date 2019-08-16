import React from 'react';

import CreateProfile from './components/profile-form/CreateProfile';
import Dashboard from './components/dashboard/Dashboard';
import Exercise from './components/exercises/Exercise';
import ExerciseMenu from './components/exercises/ExerciseMenu';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import MuscleGroup from './components/exercises/MuscleGroup';
import NotFound from './components/layout/NotFound';
import UserProfile from './components/profile/UserProfile';
import Register from './components/auth/Register';
import Routines from './components/routines/Routines';

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
                <PrivateRoute exact path="/exercise/:id" component={Exercise} />
                <PrivateRoute exact path="/exercise-menu" component={ExerciseMenu} />
                <PrivateRoute exact path="/exercise-menu/:muscle" component={MuscleGroup} />
                <PrivateRoute exact path="/profile" component={UserProfile} />
                <PrivateRoute exact path="/routines" component={Routines} />
                <Route component={NotFound} />
            </Switch>
        </section>
    );
}

export default Routes;