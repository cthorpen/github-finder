import React, { Fragment } from 'react';
import spinner from './spinner.gif';

// spinner functional component to show gif when waiting for GitHub response
// not necessary to add return statement (arrow func.). Can use: Spinner = () => <Fragment> ... 
const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt='Loading...' style={{ width: '200px', margin: 'auto', display: 'block'}} />
        </Fragment>
    );
}

export default Spinner;
