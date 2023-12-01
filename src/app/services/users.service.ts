import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private userSignUpUrl = 'https://api.escuelajs.co/api/v1/users/';
  private userLogInUrl = 'https://api.escuelajs.co/api/v1/auth/login';
  constructor(private http: HttpClient) {}

  // sign up user
  signUpUser(user: User): Observable<User> {
    return this.http.post<User>(this.userSignUpUrl, user);
  }
  // log in user
  logInUser(user: User): Observable<User> {
    return this.http.post<User>(this.userLogInUrl, user);
  }
}
