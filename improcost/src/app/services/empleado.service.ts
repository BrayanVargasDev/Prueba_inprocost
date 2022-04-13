import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = `${environment.apiUrl}v1/empleados`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Empleado[]>(this.apiUrl, { headers });
  }
  
  getById(id: number, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`, { headers });
  }

  create(empleado: Empleado, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Empleado>(this.apiUrl, empleado, { headers });
  }

  update(empleado: Empleado, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Empleado>(`${this.apiUrl}/${empleado.id}`, empleado, { headers });
  }

  delete(id: number, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Empleado>(`${this.apiUrl}/${id}`, { headers });
  }
}
