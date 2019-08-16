import React, { useReducer } from 'react';

import ExerciseContext from './exerciseContext';
import ExerciseReducer from './exerciseReducer';
import {
    EXERCISE_ERROR,
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
    //
    const getExercise = async () => {
        try {

        } catch (err) {

        }
    }
    //
    const getGroup = async muscle => {
        try {
            console.log(muscle);
            const res = await axios.get(`/api/exercise/muscle/${muscle}`);
            console.log(res.data);
            dispatch({
                type: GET_MUSCLE,
                payload: res.data
            });
            console.log('REDU', state.exercises)
        } catch (err) {
            console.log('ERR', err);
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
                getGroup
            }}
        >
            {props.children}
        </ExerciseContext.Provider>
    );
}

export default ExerciseState;