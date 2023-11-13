// auth.actions.ts

import { createAction, props } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthState>()
);

export const logout = createAction('[Auth] Logout');
