import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserActions from '../actions/user.actions';
import { UserService } from '../services/user.service';
import { UserResponse } from '../models/user.model';
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.userService.getUsers().pipe(
          map((data: UserResponse) =>
            UserActions.loadUsersSuccess({
              count: data.count,
              users: data.results,
              next: data.next,
              previous: data.previous,
            })
          ),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
