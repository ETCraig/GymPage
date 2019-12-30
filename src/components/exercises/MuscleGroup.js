import React, { Fragment, useContext, useEffect } from 'react';

import ExerciseContext from '../../context/exercise/exerciseContext';
import Loading from '../layout/Loading';

import { Link } from 'react-router-dom';

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
                    <div className="container-fluid" key={exercise._id}>
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="card">
                                    <Link to={`/exercise/${exercise._id}`}>
                                        <div className="card-header exercise-selector-wrap">
                                            <h4 className="card-title">{exercise.name}</h4>
                                        </div>
                                    </Link>
                                    <div className="card-horizontal" style={{ display: "flex", flex: "1 1 auto" }}>
                                        <Link to={`/exercise/${exercise._id}`}>
                                            <div className="img-square-wrapper exercise-selector-wrap">
                                                <img src="https://ak4.picdn.net/shutterstock/videos/1017371524/thumb/1.jpg" style={{ width: "300px", height: "180px" }} alt="Exercise Example" />
                                            </div>
                                        </Link>
                                        <div className="card-body">
                                            <p>Muscle Group: {exercise.muscle}</p>
                                            <p>Type: {exercise.type}</p>
                                            <p>Difficulty: {exercise.difficulty}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">Your Record</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            ) : <Loading />}
        </Fragment>
    );
}

export default MuscleGroup;