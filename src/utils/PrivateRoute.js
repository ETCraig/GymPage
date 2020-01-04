import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, path, ...rest }) => {
    return (
        <Route
            path={path}
            {...rest}
            render={props => {
                return auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/"
                        }}
                    />
                );
            }}
        />
    );
}

export default PrivateRoute;