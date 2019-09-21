import React, { Fragment, useEffect } from 'react';

import PostForm from './PostForm';
import PostItem from './PostItem';
import SinglePost from './SinglePost';

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