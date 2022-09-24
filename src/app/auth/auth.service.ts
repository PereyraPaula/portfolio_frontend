import { Injectable } from '@angular/core';
import { LoginCredentials } from './login/login-credentials';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  logIn(credentials: Partial<LoginCredentials>): void {
    console.log('Logueado', credentials);
  }
}
