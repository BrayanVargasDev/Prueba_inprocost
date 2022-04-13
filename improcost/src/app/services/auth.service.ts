import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserAuth } from '../models/userAuth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}login`;

  constructor(
    private http: HttpClient
  ) { }
  
  login(email: string, password: string, name: string){
    return this.http.post<UserAuth>(this.apiUrl, { email, password, name });
  }

} 
