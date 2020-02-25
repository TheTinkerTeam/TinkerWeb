import axios from "axios";

import { setAlert } from "./alertActions";

import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from "./types.js";

import setAuthToken from "../utils/setAuthToken";

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/v1/users/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signup = ({ email, username, password }) => async dispatch => {
  const body = { username, email, password };
  try {
    const res = await axios.post("/api/v1/users", body);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    dispatch(setAlert("SUCCESSFULLY SIGNED UP!", "positive"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: SIGNUP_FAIL
    });
  }
};

export const login = ({ username, password }) => async dispatch => {
  const body = { username, password };
  try {
    const res = await axios.post("/api/v1/users/auth", body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(setAlert("SUCCESSFULLY LOGGED IN!", "positive"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
