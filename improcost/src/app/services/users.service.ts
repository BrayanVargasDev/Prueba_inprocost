import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = `${environment.apiUrl}users/`;

  constructor(
    private http: HttpClient
  ) { }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return localStorage.getItem('user');
  }

  removeUser() {
    localStorage.removeItem('user');
  }

}
