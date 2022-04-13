import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap } from 'rxjs';
import { UserAuth } from '../models/userAuth.model';
import { TokenService } from './token.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}login`;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private UserService: UsersService
  ) { }
  
  login(email: string, password: string, name: string){
    return this.http.post<UserAuth>(this.apiUrl, { email, password, name })
    .pipe(
      tap( (response => {
        this.tokenService.saveToken(response.token);
        this.UserService.saveUser(response.user);
      }
      ))
    );
  }

} 
