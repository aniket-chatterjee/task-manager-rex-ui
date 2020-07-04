import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserActions from './user.actions';
import { UserService } from './user.service';
import { UserResponse } from './user.model';
@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.loadUsers),
      concatMap(() =>
        this.userService.getUsers().pipe(
          map((data: UserResponse) => UserActions.loadUsersSuccess(data)),
          catchError((error) => of(UserActions.loadUsersFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private userService: UserService) {}
}
