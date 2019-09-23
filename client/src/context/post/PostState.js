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
} from '../Types';

import axios from 'axios';

const PostState = props => {
    const initialState = {
        post: {},
        posts: [],
        error: null
    }

    const [state, dispatch] = useReducer(PostReducer, initialState);

    const createNewPost = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const getAllPosts = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const getSinglePost = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const deleteSinglePost = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const likePost = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const unlikePost = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const createComment = () => {
        try {
            
        } catch (error) {
            
        }
    }

    const deleteComment = () => {
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <PostContext.Provider
            value={{
                post: state.post,
                posts: state.posts,
                error: state.errors
            }}
        >
            {props.children}
        </PostContext.Provider>
    );
}

export default AuthState;