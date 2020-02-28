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
    const userResponse = await axios.get("/api/v1/users/auth");
    const profileResponse = await axios.get("/api/v1/profiles/me");

    dispatch({
      type: USER_LOADED,
      payload: { user: userResponse.data, profile: profileResponse.data }
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signup = body => async dispatch => {
  try {
    const res = await axios.post("/api/v1/users", body);

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "error"));
      });
    }
    dispatch({
      type: SIGNUP_FAIL
    });
  }
};

export const login = ({ email, password }) => async dispatch => {
  try {
    const res = await axios.post("/api/v1/users/auth", { email, password });

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response && err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "error"));
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
