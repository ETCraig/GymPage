import React, { Fragment, useContext, useEffect } from 'react';

import Loading from '../layout/Loading';
import RoutineContext from '../../context/routine/routineContext';

const Routines = () => {
    const routineContext = useContext(RoutineContext);

    const { getRoutines, routines, loading } = routineContext;

    useEffect(() => {
        getRoutines();
        // eslint-disable-next-line
    }, []);
    return (
        <Fragment>
            {routines !== null && !loading ? (
                routines.map(routine => (
                    <div key={routine._id}>
                        Routine
                    </div>
                ))
            ) : <Loading />}
        </Fragment>
    );
}

export default Routines;