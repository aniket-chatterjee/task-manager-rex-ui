import { Action, createReducer, on } from "@ngrx/store";
import * as AuthActions from "./auth.actions";
import { AuthState } from "./auth.model";

export const authFeatureKey = "Auth";

export const initialState: AuthState = {
  isLoggedIn: null,
  accessToken: null,
  refreshToken: null,
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.login, (state, action) => state),
  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      error: null, //clear the error
      isLoggedIn: true,
      accessToken: action.accessToken,
      refreshToken: action.refreshToken,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),
  on(AuthActions.signup, (state, action) => state),
  on(AuthActions.signupSuccess, (state, action) => {
    return {
      ...state,
      error: null, //clear the error
      isLoggedIn: true,
      accessToken: action.accessToken,
      refreshToken: action.refreshToken,
    };
  }),
  on(AuthActions.signupFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);
