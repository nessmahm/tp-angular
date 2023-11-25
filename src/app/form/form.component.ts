// app.component.ts

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/auth.reducer';
import * as AuthActions from "../auth/auth.actions";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  email: string = '';
  password: string = '';

  constructor(private store: Store<{ auth: AuthState }>, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.store.select('auth').subscribe((state: AuthState) => {
      console.log(state)
    })
  }

  async onSubmit() {
    // Handle form submission here
    // make a post request to the server
    const postData = {email: this.email, password: this.password};
    this.http.post<any>('https://apilb.tridevs.net/api/Users/login', postData)
      .subscribe(res => {
        console.log(res);
        const payload = {
          userId: res?.userId ,
          token: res?.id,
          ttl: res?.ttl,
          isAuthenticated: true,
          email: this.email,
        } as AuthState;
        this.store.dispatch(AuthActions.loginSuccess(payload));
        localStorage.setItem('user', JSON.stringify(payload))
        this.router.navigate(['/mini-word']);
      });

  }
}

