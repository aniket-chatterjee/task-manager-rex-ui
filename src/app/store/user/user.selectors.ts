import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { UsersState } from './user.model';

export const selectUserState = createFeatureSelector<UsersState>(
  fromUser.userFeatureKey
);
