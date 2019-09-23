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
    UNCOMMENT_ARTICLE
} from '../Types';

import axios from 'axios';

const ArticleState = props => {
    const initialState = {}

    const [state, dispatch] = useReducer(ArticleReducer, initialState);

    const createNewArticle = () => {
        try {

        } catch (error) {

        }
    }

    const getUsersArticles = () => {
        try {

        } catch (error) {

        }
    }

    const getSingleArticle = () => {
        try {

        } catch (error) {

        }
    }

    const getArticle = () => {
        try {

        } catch (error) {

        }
    }

    const getCommunityArticle = () => {
        try {

        } catch (error) {

        }
    }

    const editArticle = () => {
        try {

        } catch (error) {

        }
    }

    const favoriteArticle = () => {
        try {

        } catch (error) {

        }
    }

    const unfavoriteArticle = () => {
        try {

        } catch (error) {

        }
    }

    const addComment = () => {
        try {

        } catch (error) {

        }
    }

    const deleteComment = () => {
        try {

        } catch (error) {

        }
    }

    <ArticleContext.Provider
        value={{

        }}
    >
        {props.children}
    </ArticleContext.Provider>
}

export default ArticleState;