import { createAction, props } from '@ngrx/store';
import { UserResponse, UsersState, User } from '../models/user.model';

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<UsersState>()
);

export const selectLoginUser = createAction(
  '[User] Select Login User',
  props<{ user: UserDropdownModel }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: any }>()
);
