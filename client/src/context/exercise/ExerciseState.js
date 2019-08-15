import React, {useReducer} from 'react';

import ExerciseContext from './exerciseContext';
import ExerciseReducer from './exerciseReducer';
import {
    EXERCISE_ERROR,
    GET_EXERCISE,
    GET_EXERCISES,
    GET_MUSCLE
} from '../Types';

import axios from 'axios';

const ExerciseState = props => {
    const initialState = {
        exercises: null,
        exercise: null,
        error: null
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
    const getGroup = async () => {
        try {
            
        } catch (err) {
            
        }
    }

    return (
        <ExerciseContext.Provider>
            {props.children}
        </ExerciseContext.Provider>
    );
}

export default ExerciseState;