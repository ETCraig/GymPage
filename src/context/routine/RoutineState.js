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
    GET_ROUTINE,
    GET_ROUTINES,
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
    const createRoutine = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/routine', formData, config);

            dispatch({
                type: CREATE_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const createWorkout = async (routine_id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/routine/workout/${routine_id}`, formData, config);

            dispatch({
                type: CREATE_WORKOUT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
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
    const deleteRoutine = async routine_id => {
        try {
            const res = await axios.delete(`/api/routine/${routine_id}`);

            dispatch({
                type: DELETE_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const deleteWorkout = async workout_id => {
        try {
            const res = await axios.delete(`/api/routine/workout/${workout_id}`);

            dispatch({
                type: DELETE_WORKOUT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const updateRecord = async id => {
        try {
            const res = await axios.post(`/api/routine/exercise/${id}`);

            dispatch({
                type: UPDATE_RECORD,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const editRoutine = async id => {
        try {
            const res = await axios.patch(`/api/routine/${id}`);

            dispatch({
                type: EDIT_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const editWorkout = async id => {
        try {
            const res = await axios.patch(`/api/routine/workout/${id}`);

            dispatch({
                type: EDIT_WORKOUT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const addExercise = async (id, exercise_id) => {
        try {
            const res = await axios.put(`/api/routine/workout/${id}/${exercise_id}`);

            dispatch({
                type: ADD_EXERCISE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const removeExercise = async (id, exercise_id) => {
        try {
            const res = await axios.delete(`/api/routine/workout/${id}/${exercise_id}`);

            dispatch({
                type: REMOVE_EXERCISE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const saveRoutine = async id => {
        try {
            const res = await axios.put(`/api/routine/save/${id}`);

            dispatch({
                type: SAVE_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const unsaveRoutine = async id => {
        try {
            const res = await axios.put(`/api/routine/unsave/${id}`);

            dispatch({
                type: UNSAVE_ROUTINE,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const createComment = async (id, formData) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`/api/routine/comment/${id}`, formData, config);

            dispatch({
                type: CREATE_COMMENT,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ROUTINE_ERROR,
                payload: err.response.msg
            });
        }
    }
    // //
    const deleteComment = async (id, comment_id) => {
        try {
            const res = await axios.delete(`/api/routine/comment/${id}/${comment_id}`);

            dispatch({
                type: DELETE_COMMENT,
                payload: res.data
            });
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
                routines: state.routines,
                routine: state.routine,
                workout: state.workout,
                error: state.error,
                loading: state.loading,
                createRoutine,
                createWorkout,
                getRoutines,
                
                getRoutine,
                deleteRoutine,
                deleteWorkout,
                updateRecord,
                editRoutine,
                editWorkout,
                addExercise,
                removeExercise,
                saveRoutine,
                unsaveRoutine,
                createComment,
                deleteComment
            }}
        >
            {props.children}
        </RoutineContext.Provider>
    );
}

export default RoutineState;