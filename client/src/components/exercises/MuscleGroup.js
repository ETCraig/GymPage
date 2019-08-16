import React, { Fragment, useContext, useEffect } from 'react';

import ExerciseContext from '../../context/exercise/exerciseContext';
import Loading from '../layout/Loading';

const MuscleGroup = (props) => {
    const exerciseContext = useContext(ExerciseContext);

    const { getGroup, exercises, loading } = exerciseContext;

    const muscle = props.match.params.muscle

    useEffect(() => {
        getGroup(muscle);
        // eslint-disable-next-line
    }, []);

    if (exercises !== null && exercises.length === 0) {
        return <h4>No Exercises Found for this Muscle Group</h4>
    }
    
    return (
        <Fragment>
            {exercises !== null && !loading ? (
                exercises.map(exercise => (
                    <Fragment key={exercise._id}>
                        <h4>{exercise.name}</h4>
                    </Fragment>
                ))
            ) : <Loading />}
        </Fragment>
    );
}

export default MuscleGroup;