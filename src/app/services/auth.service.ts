import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  baseURL='http://localhost:3000/auth'

  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<User>(`${this.baseURL}/login`, user);
  }
}
