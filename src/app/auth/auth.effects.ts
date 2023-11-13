// auth.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap, withLatestFrom } from 'rxjs/operators';
import * as AuthActions from './auth.actions';
import { AuthState } from './auth.reducer';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private store: Store<AuthState>) {}

  checkTokenExpiration$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),// Include the appropriate action that indicates the user is still active
      withLatestFrom(this.store.select('auth')), // Get the latest auth state
      mergeMap(([action, authState]) => {
        if (authState.expirationDate && new Date() > new Date(authState.expirationDate)) {
          // Token has expired, dispatch the logout action
          return of(AuthActions.logout());
        } else {
          // Token is still valid
          return of(); // No action to dispatch
        }
      })
    )
  );

}
