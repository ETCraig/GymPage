import React, { Fragment, useContext, useEffect } from 'react';

import ExerciseContext from '../../context/exercise/exerciseContext';
import Loading from '../layout/Loading';

const Exercise = (props) => {
    const exerciseContext = useContext(ExerciseContext);

    const { getExercise, exercise, loading } = exerciseContext;

    useEffect(() => {
        const id = props.match.params.id;

        getExercise(id);
        // eslint-disable-next-line
    }, []);
    console.log(exercise)
    return (
        <Fragment>
            {exercise !== null && !loading ? (
                <div className="card card-cascade wider reverse">

                    <div className="view view-cascade overlay text-center">
                        <img className="card-img-top" src="https://ak4.picdn.net/shutterstock/videos/1017371524/thumb/1.jpg" style={{ width: "70%", height: "70%" }} alt="Card image cap" />
                        <a href="#!">
                            <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>

                    <div className="card-body card-body-cascade text-center">

                        <h4 className="card-title"><strong>{exercise.name}</strong></h4>
                        <h6 className="font-weight-bold indigo-text py-2">{exercise.difficulty}</h6>
                        <p className="card-text">{exercise.steps}</p>

                        {/* <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>

                    <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>

                    <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a> */}

                    </div>
                    <div className="rounded-bottom mdb-color lighten-3 text-center pt-3">
                        <ul className="list-unstyled list-inline font-small">
                            <li className="list-inline-item pr-2 white-text">Muscle Group: {exercise.muscle}</li>
                            <li className="list-inline-item pr-2">Type: {exercise.type}</li>
                            <li className="list-inline-item pr-2">{exercise.equipments.map(item => item.equipment)}</li>
                            <li className="list-inline-item"></li>
                        </ul>
                    </div>
                </div>
            ) : <Loading />}
        </Fragment>
    );
}

export default Exercise;