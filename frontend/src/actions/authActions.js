import axios from "axios";
import { getFirebase } from "react-redux-firebase";

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

export const loadUser = uid => async dispatch => {
  if (!uid) {
    return dispatch({
      type: USER_LOADED,
      payload: { profile: null }
    });
  }
  try {
    const profileResponse = await axios.post("http://localhost:5000/api/v2", {
      query: `
        query GetUser($uid: String!) {
            user(uid: $uid) {
              email,
              username,
              firstName,
              lastName,
              school,
              role
            }
          }
        `,
      variables: {
        uid
      }
    });
    dispatch({
      type: USER_LOADED,
      payload: { profile: profileResponse.data.data.user }
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signup = user => async dispatch => {
  try {
    const firebase = getFirebase();
    const firebaseRes = await firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password);

    const res = await axios.post(
      "http://localhost:5000/api/v2",
      {
        query: `
        mutation Signup(
          $uid: String!,
          $email: String!,
          $password: String!,
          $firstName: String!,
          $lastName: String!,
          $role: String!,
          $school: String!
        ) {
            signup(uid: $uid, email: $email, password: $password, firstName: $firstName, lastName: $lastName, role: $role, school: $school) {
              email,
              username,
              firstName,
              lastName,
              school,
              role
            }
          }
        `,
        variables: {
          uid: firebaseRes.user.uid,
          email: user.email,
          password: user.password,
          firstName: user.firstName,
          lastName: user.lastName,
          school: user.school,
          role: user.role
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser(firebaseRes.user.uid));
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: SIGNUP_FAIL
    });
  }
};

export const login = ({ email, password }) => async dispatch => {
  try {
    const firebase = getFirebase();
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);

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

export const googleSignIn = () => async dispatch => {
  const firebase = getFirebase();
  const res = await firebase.login({ provider: "google", type: "popup" });
  const user = res.user;
  if (res.additionalUserInfo.isNewUser) {
    const res = await axios.post(
      "http://localhost:5000/api/v2",
      {
        query: `
        mutation Signup(
          $uid: String!,
          $email: String!,
          $password: String!,
          $firstName: String!,
          $lastName: String!,
          $role: String!,
          $school: String!
        ) {
            signup(uid: $uid, email: $email, password: $password, firstName: $firstName, lastName: $lastName, role: $role, school: $school) {
              email,
              username,
              firstName,
              lastName,
              school,
              role
            }
          }
        `,
        variables: {
          uid: user.uid,
          email: user.email,
          password: "GOOGLE_SIGN_IN",
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          school: "public",
          role: "student"
        }
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

export const logout = () => dispatch => {
  const firebase = getFirebase();
  firebase.logout();
  dispatch({
    type: LOGOUT
  });
};
