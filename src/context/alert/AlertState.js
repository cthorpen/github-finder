import React, {useReducer} from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

// initial state & actions (the methods within)
const AlertState = (props) => {
    // state of anything to do with alert
    const initialState = null;

    // dispatch a type back to the reducer
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //set alert
    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: {msg, type}
        });
        // remove alert after 5000ms
        setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000);
    };

    // return provider. making available to entire app
    return (<AlertContext.Provider
        value={{
            alert: state,
            setAlert
        }} >
        {props.children}
    </AlertContext.Provider> );
};

export default AlertState;