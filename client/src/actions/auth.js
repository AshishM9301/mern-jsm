import { AUTH, LOGOUT } from "../constant/actionTypes";
import * as api from "../api";

export const googleSignIn = (user) => async (dispatch) => {
  try {
    const { result, token } = user;

    console.log(user);

    dispatch({ type: AUTH, data: { result, token } });
  } catch (err) {
    console.log(err);
  }
};

export const signIn = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);

    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    history("/");
  } catch (err) {
    console.log(err);
  }
};

export const signUp = (formData, history) => async (dispatch) => {
  try {
    console.log(formData);

    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    history("/");
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
  } catch (err) {
    console.log(err);
  }
};
