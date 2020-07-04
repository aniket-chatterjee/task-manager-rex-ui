import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { User, UsersState } from './user.model';

export const userFeatureKey = 'user';

export const initialState: UsersState = {
  users: [],
  next: null,
  previous: null,
  selectedUser: null,
  count: 0,
};

export const reducer = createReducer(
  initialState,

  on(UserActions.loadUsers, (state) => state),
  on(UserActions.loadUsersSuccess, (state, action) => {
    return {
      ...state,
      count: action.count,
      next: action.next,
      previous: action.previous,
      users: action.results,
    };
  }),
  on(UserActions.loadUsersFailure, (state, action) => state),
  on(UserActions.selectLoginUser, (state, action) => {
    return { ...state, selectedUser: action.user };
  })
);
