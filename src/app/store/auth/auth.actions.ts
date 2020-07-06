import { createAction, props } from "@ngrx/store";
import { LoginInput, AuthResponse, SignupInput } from "./auth.model";

export const login = createAction(
  "[Auth] Login",
  props<{ data: LoginInput }>()
);

export const loginSuccess = createAction(
  "[Auth] Login Success",
  props<AuthResponse>()
);

export const loginFailure = createAction(
  "[Auth] Login Failure",
  props<{ error: any }>()
);

export const signup = createAction(
  "[Auth] Signup",
  props<{ data: SignupInput }>()
);

export const signupSuccess = createAction(
  "[Auth] Signup Success",
  props<AuthResponse>()
);

export const signupFailure = createAction(
  "[Auth] Signup Failure",
  props<{ error: any }>()
);

export const logout = createAction("[Auth] Logout");
