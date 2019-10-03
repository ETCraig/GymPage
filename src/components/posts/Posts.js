import React, { Fragment, useContext, useEffect } from 'react';

import PostForm from './PostForm';
import PostItem from './PostItem';
import SinglePost from './SinglePost';
import Loading from '../layout/Loading';

const Posts = () => {
    
    return (
        <Fragment>
            <h1 className="large text-primary">News Feed</h1>
            <p className="lead">
                <i className="fas fa-grip-horizontal"></i> Welcome Back
            </p>
            <div className="posts">

            </div>
        </Fragment>
    );
}

export default Posts;