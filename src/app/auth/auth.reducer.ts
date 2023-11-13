// auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  userId: string | null;
  token: string | null;
  ttl: number | null;
  email: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  userId: null,
  token: null,
  ttl: null,
  email: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token, userId, ttl, email  }) => ({
    isAuthenticated: true,
    token,
    userId,
    ttl,
    email,
  })),
  on(AuthActions.logout, (state) => ({
    isAuthenticated: false,
    token: null,
    userId: null,
    ttl: null,
    email: null,
  }))
);
