import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUser = {
    username: '',
    password: ''
  };
  constructor() { }

  login(Username: string, Password: string): void {
    this.currentUser = {
      username: Username,
      password: Password
    };
  }

  logout(): void {
    this.currentUser = null;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }
}
