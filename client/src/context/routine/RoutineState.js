import React, { useReducer } from 'react';
import RoutineContext from './routineContext';
import RoutineReducer from './routineReducer';
import {
    ADD_EXERCISE,
    CREATE_COMMENT,
    CREATE_ROUTINE,
    CREATE_WORKOUT,
    DELETE_COMMENT,
    DELETE_ROUTINE,
    DELETE_WORKOUT,
    EDIT_ROUTINE,
    EDIT_WORKOUT,
    REMOVE_EXERCISE,
    ROUTINE_ERROR,
    SAVE_ROUTINE,
    UNSAVE_ROUTINE,
    UPDATE_RECORD
} from '../Types';

import axios from 'axios';

const RoutineState = props => {
    const initialState = {
        routines: null,
        routine: null,
        workout: null,
        error: null,
        loading: true
    }

    const [state, dispatch] = useReducer(RoutineReducer, initialState);

    //
    const createRoutine = () => {
        try {
            
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const createWorkout = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const deleteRoutine = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const deleteWorkout = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const updateRecord = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const editRoutine = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const editWorkout = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const addExercise = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const removeExercise = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const saveRoutine = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const unsaveRoutine = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const createComment = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    //
    const deleteComment = () => {
        try {

        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }

    return (
        <RoutineContext.Provider
            value={{
                routine: state.routines,
                routine: routine,
                workout: state.workout,
                loading: state.loading
            }}
        >
            {props.children}
        </RoutineContext.Provider>
    );
}

export default RoutineState;