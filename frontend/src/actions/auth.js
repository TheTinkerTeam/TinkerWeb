import axios from 'axios';

import { setAlert } from 'src/actions/alert';

import * as types from "src/actions/types"

import setAuthToken from "src/utils/setAuthToken";

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/v1/users/auth');

        dispatch({
            type: types.USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: types.AUTH_ERROR
        });
    }
};

export const signup = ({ email, username, password}) => async dispatch => {
    const body = { username, email, password};
    try {
        const res = await axios.post('/api/v1/users', body);

        dispatch({
            type: types.SIGNUP_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }
        dispatch({
            type: types.SIGNUP_FAIL
        });
    }
};

export const login = ({ username, password }) => async dispatch => {
    const body = {username, password};
    try {
        const res = await axios.post('/api/v1/users/auth', body);

        dispatch({
            type: types.LOGIN_SUCCESS,
            payload: res.data
        });
    } catch(err) {
        const errors = err.response.data.errors;

        if (errors) {
            errors.forEach(error => {
                dispatch(setAlert(error.msg, 'danger'));
            });
        }

        dispatch({
            type: types.LOGIN_FAIL
        });
    }
};