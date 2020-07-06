import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from "./auth.reducer";
import { AuthState } from "./auth.model";

export const selectUserState = createFeatureSelector<AuthState>(
  fromUser.authFeatureKey
);
