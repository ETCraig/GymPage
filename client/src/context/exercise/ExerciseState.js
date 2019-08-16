import React, { useReducer } from 'react';

import ExerciseContext from './exerciseContext';
import ExerciseReducer from './exerciseReducer';
import {
    EXERCISE_ERROR,
    GET_EXERCISE,
    GET_MUSCLE
} from '../Types';

import axios from 'axios';

const ExerciseState = props => {
    const initialState = {
        exercises: null,
        exercise: null,
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(ExerciseReducer, initialState);

    //
    const getExercises = async () => {
        try {

        } catch (err) {

        }
    }
    //GET INDIVIDUAL EXERCISE BY ID
    const getExercise = async id => {
        try {
            const res = await axios.get(`/api/exercise/${id}`);

            dispatch({
                type: GET_EXERCISE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: EXERCISE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //GET EXERCISE BY MUSCLE GROUP
    const getGroup = async muscle => {
        try {
            const res = await axios.get(`/api/exercise/muscle/${muscle}`);
            
            dispatch({
                type: GET_MUSCLE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: EXERCISE_ERROR,
                payload: err.response.msg
            });
        }
    }

    return (
        <ExerciseContext.Provider
            value={{
                exercises: state.exercises,
                exercise: state.exercise,
                error: state.error,
                loading: state.loading,
                getGroup,
                getExercise
            }}
        >
            {props.children}
        </ExerciseContext.Provider>
    );
}

export default ExerciseState;