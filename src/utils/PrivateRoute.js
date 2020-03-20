import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user: { isAuthenticated }, ...rest }) => (
    <Route {...rest} render={props => !isAuthenticated ? (
        <Redirect to="/login" />
    ) : (
            <Component {...props} />
        )}
    />
);

PrivateRoute.propTypes = {
    user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);