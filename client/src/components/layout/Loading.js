import React, {Fragment} from 'react';

//Workout loading gif   
// import loading from './loading.gif';

export default () => (
    <Fragment>
        <img 
            src={loading}
            style={{width: '200px', margin: 'auto', display: 'block'}}
            alt="loading..."
        />
    </Fragment>
);