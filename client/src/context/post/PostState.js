import React, { useReducer } from 'react';

import PostContext from './postContext';
import PostReducer from './postReducer';

import axios from 'axios';

import {
    CREATE_POST,
    GET_POST,
    GET_POSTS,
    DELETE_POST,
    LIKE_POST,
    UNLIKE_POST,
    COMMENT_POST,
    UNCOMMENT_POST,
    POST_ERROR
} from '../Types';

import axios from 'axios';

const PostState = props => {
    const initialState = {
        post: {},
        posts: [],
        error: null
    }

    const [state, dispatch] = useReducer(PostReducer, initialState);

    const createNewPost = formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/posts', formData, config);

            dispatch({
                type: CREATE_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const getAllPosts = () => {
        try {
            const res = await axios.get('/api/posts');

            dispatch({
                type: GET_POSTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const getSinglePost = id => {
        try {
            const res = await axios.get(`/api/posts/${id}`);

            dispatch({
                type: GET_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const deleteSinglePost = id => {
        try {
            const res = await axios.delete(`/api/posts/${id}`);

            dispatch({
                type: DELETE_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const likePost = id => {
        try {       
            const res = await axios.put(`/api/posts/like/${id}`);
            
            dispatch({
                type: LIKE_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const unlikePost = id => {
        try {
            const res = await axios.put(`/api/posts/unlike/${id}`);
            
            dispatch({
                type: UNLIKE_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const createComment = (id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/posts/comment/${id}`, formData, config);

            dispatch({
                type: COMMENT_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    const deleteComment = (id, comment_id) => {
        try {
            const res = await axios.delete(`/api/posts/comment/${id}/${comment_id}`);

            dispatch({
                type: UNCOMMENT_POST,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: POST_ERROR,
                payload: err.response.msg
            });
        }
    }

    return (
        <PostContext.Provider
            value={{
                post: state.post,
                posts: state.posts,
                error: state.errors,
                createNewPost,
                getAllPosts,
                getSinglePost,
                deleteSinglePost,
                likePost,
                unlikePost,
                createComment,
                deleteComment
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
}

export default AuthState;