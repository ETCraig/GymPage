import React, { useReducer } from 'react';
import RoutineContext from './routineContext';
import RoutineReducer from './routineReducer';
import {
    // ADD_EXERCISE,
    // CREATE_COMMENT,
    // CREATE_ROUTINE,
    // CREATE_WORKOUT,
    // DELETE_COMMENT,
    // DELETE_ROUTINE,
    // DELETE_WORKOUT,
    // EDIT_ROUTINE,
    // EDIT_WORKOUT,
    GET_ROUTINE,
    GET_ROUTINES,
    // REMOVE_EXERCISE,
    ROUTINE_ERROR,
    // SAVE_ROUTINE,
    // UNSAVE_ROUTINE,
    // UPDATE_RECORD
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
    // const createRoutine = async () => {
    //     try {
            
    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const createWorkout = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    //
    const getRoutines = async () => {
        try {
            let res = await axios.get('/api/routines');
            console.log(res)
            dispatch({
                type: GET_ROUTINES,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: ROUTINE_ERROR,
                payload: err
            });
        }
    }
    //
    const getRoutine = async () => {
        try {
            let res = await axios.get('/api/routines/private');
            console.log(res)
            dispatch({
                type: GET_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
            dispatch({
                type: ROUTINE_ERROR,
                payload: err
            });
        }
    }
    //
    // const deleteRoutine = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const deleteWorkout = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const updateRecord = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const editRoutine = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const editWorkout = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const addExercise = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const removeExercise = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const saveRoutine = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const unsaveRoutine = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const createComment = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }
    // //
    // const deleteComment = async () => {
    //     try {

    //     } catch (err) {
    //         dispatch({
    //             type: ROUTINE_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // }

    return (
        <RoutineContext.Provider
            value={{
                routines: state.routines,
                routine: state.routine,
                workout: state.workout,
                error: state.error,
                loading: state.loading,
                getRoutines,
                getRoutine
            }}
        >
            {props.children}
        </RoutineContext.Provider>
    );
}

export default RoutineState;