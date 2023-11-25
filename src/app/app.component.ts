import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from './auth/auth.reducer';
import * as AuthActions from './auth/auth.actions';
import { selectIsAuthenticated } from './auth/auth.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean = false;
  constructor(private store: Store<{ auth: AuthState }>, private router: Router) {
    this.store.select(selectIsAuthenticated).subscribe((isAuthenticated) => {
      if (!isAuthenticated) {
        // navigate to login page
        // with angular router
        this.router.navigate(['/login']);
      }
      this.isAuthenticated = isAuthenticated;
    });
  }
  title = 'TP1';
  logout() {
    this.store.dispatch(AuthActions.logout())
    localStorage.removeItem('user')
  }
}

