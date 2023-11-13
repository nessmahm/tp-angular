import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/auth.reducer';
import { selectIsAuthenticated } from '../auth/auth.selector';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  text="Hello World";
  fontSize = 20;
  color="black";
  fontFamily="Arial";
}
