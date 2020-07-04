import { createAction, props } from '@ngrx/store';
import {
  UserResponse,
  UsersState,
  User,
  UserDropdownModel,
} from './user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<UserResponse>()
);

export const selectLoginUser = createAction(
  '[User] Select Login User',
  props<{ user: UserDropdownModel }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
