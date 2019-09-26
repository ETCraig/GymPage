import React, { useReducer } from 'react';

import ArticleContext from './articleContext';
import ArticleReducer from './articleReducer';

import {
    CREATE_ARTICLE,
    USERS_ARTICLES,
    SINGLE_ARTICLE,
    COMMUNITY_ARTICLE,
    EDIT_ARTICLE,
    FAVORITE_ARTICLE,
    UNFAVORITE_ARTICLE,
    COMMENT_ARTICLE,
    UNCOMMENT_ARTICLE,
    ARTICLE_ERROR
} from '../Types';

import axios from 'axios';

const ArticleState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(ArticleReducer, initialState);

    const createNewArticle = formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/article'.formData, config);

            dispatch({
                type: CREATE_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: error.response.msg
            });
        }
    }

    const getUsersArticles = () => {
        try {
            const res = await axios.get('/api/articles');

            dispatch({
                type: USERS_ARTICLES,
                payload: res.data
            });
        } catch (error) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const getSingleArticle = id => {
        try {
            const res = await axios.get(`/api/articles/${id}`);

            dispatch({
                type: SINGLE_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const getCommunityArticle = () => {
        try {
            const res = await axios.get('/api/articles/community');

            dispatch({
                type: COMMUNITY_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const editArticle = (article_id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.patch(`/api/articles/${article_id}`, formData, config);

            dispatch({
                type: EDIT_ARTICLE,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const favoriteArticle = id => {
        try {
            const res = await axios.put(`/api/articles/favorite/${id}`);

            dispatch({
                type: FAVORITE_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const unfavoriteArticle = id => {
        try {
            const res = await axios.put(`/api/articles/unfavorite/${id}`);

            dispatch({
                type: UNFAVORITE_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    const addComment = (id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/articles/comment/${id}`, formData, config);

            dispatch({
                type: COMMENT_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }   
    }

    const deleteComment = (id, comment_id) => {
        try {
            const res = await axios.delete(`/api/articles/comment/${id}/${comment_id}`);

            dispatch({
                type: UNCOMMENT_ARTICLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ARTICLE_ERROR,
                payload: err.response.msg
            });
        }
    }

    <ArticleContext.Provider
        value={{
            createNewArticle,
            getUsersArticles,
            getSingleArticle,
            getCommunityArticle,
            editArticle,
            favoriteArticle,
            unfavoriteArticle,
            addComment,
            deleteComment
        }}
    >
        {props.children}
    </ArticleContext.Provider>
}

export default ArticleState;