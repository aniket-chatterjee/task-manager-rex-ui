import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { AuthService } from "./auth.service";
import * as AuthActions from "./auth.actions";
import { AuthResponse } from "./auth.model";
@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      concatMap((action) =>
        this.authService.login(action.data).pipe(
          map((data: AuthResponse) => AuthActions.loginSuccess(data)),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });
  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signup),
      concatMap((action) =>
        this.authService.signup(action.data).pipe(
          map((data: AuthResponse) => AuthActions.signupSuccess(data)),
          catchError((error) => of(AuthActions.signupFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private authService: AuthService) {}
}
