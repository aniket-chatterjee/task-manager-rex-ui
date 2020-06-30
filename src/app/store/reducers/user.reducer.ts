import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { User, UsersState } from '../models/user.model';

export const userFeatureKey = 'user';

export interface State extends UsersState {}

export const initialState: State = {
  users: [],
  next: null,
  previous: null,
  count: 0,
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, (state) => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      ...action,
    };
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),
  on(UserActions.selectLoginUser, (state, action) => {
    return { ...state, selectedUser: action.user };
  })
);
