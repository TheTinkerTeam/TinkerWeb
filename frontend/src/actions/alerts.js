import uuid from 'uuid';

import * as types from "src/actions/types"

export const setAlert = (msg, type, timeout = 5000) => dispatch => {
    const id = uuid.v4();
    dispatch({
        type: types.SET_ALERT,
        payload: {
            id,
            msg,
            type
        }
    });

    setTimeout(() => dispatch({
        type: types.REMOVE_ALERT,
        payload: id
    }), timeout);
};