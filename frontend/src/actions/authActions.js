import axios from "axios";
import { getFirebase } from "react-redux-firebase";

import { setAlert } from "./alertActions";

import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  COMPLETE_REGISTRATION_SUCCESS,
  COMPLETE_REGISTRATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
} from "./types.js";

export const loadUser = (uid, newUser = false) => async (dispatch) => {
  if (!uid) {
    return dispatch({
      type: USER_LOADED,
      payload: { profile: null },
    });
  }
  try {
    const profileResponse = await axios.post("http://localhost:5000/api/v2", {
      query: `
        query GetUser($uid: String!) {
            user(uid: $uid) {
              uid,
              email,
              username,
              firstName,
              lastName,
              school,
              role,
              avatar
            }
          }
        `,
      variables: {
        uid,
      },
    });
    dispatch({
      type: USER_LOADED,
      payload: { profile: { ...profileResponse.data.data.user, newUser } },
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const signup = (user) => async (dispatch) => {
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
          $school: String!,
          $avatar: String!
        ) {
            signup(uid: $uid, email: $email, password: $password, firstName: $firstName, lastName: $lastName, role: $role, school: $school, avatar: $avatar) {
              email,
              username,
              firstName,
              lastName,
              school,
              role,
              avatar
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
          role: user.role,
          avatar: user.imageUrl || "defaultImgUrl",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser(firebaseRes.user.uid));
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: SIGNUP_FAIL,
    });
  }
};

export const completeRegistration = (user) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v2",
      {
        query: `
        mutation completeRegistration(
          $uid: String!,
          $role: String!,
          $school: String!
        ) {
            completeRegistration (uid: $uid, role: $role, school: $school) {
              uid,
              school,
              role
            }
          }
        `,
        variables: {
          uid: user.uid,
          school: user.school,
          role: user.role,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: COMPLETE_REGISTRATION_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser(user.uid));
  } catch (err) {
    console.error(err.message);
    dispatch({
      type: COMPLETE_REGISTRATION_FAIL,
    });
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  try {
    const firebase = getFirebase();
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser(res.user.uid));
  } catch (err) {
    const errors = err.response && err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "error"));
      });
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const googleSignIn = () => async (dispatch) => {
  const firebase = getFirebase();
  const res = await firebase.login({ provider: "google", type: "popup" });
  const user = res.user;
  if (res.additionalUserInfo.isNewUser) {
    console.log("Google SignIn New User", user);
    await axios.post(
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
          $avatar: String!
        ) {
            signup(uid: $uid, email: $email, password: $password, firstName: $firstName, lastName: $lastName, role: $role, school: $school, avatar: $avatar) {
              email,
              username,
              firstName,
              lastName,
              school,
              role,
              avatar
            }
          }
        `,
        variables: {
          uid: user.uid,
          email: user.email,
          password: "GOOGLE_SIGN_IN",
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          school: "",
          role: "",
          avatar: user.photoURL || "defaultImgUrl",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  console.log("Google SignIn Not NEW", user);

  dispatch(loadUser(user.uid, true));
};

export const logout = () => (dispatch) => {
  const firebase = getFirebase();
  firebase.logout();
  dispatch({
    type: LOGOUT,
  });
};
