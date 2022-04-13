import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empleado } from '../models/empleado.model';
import { checkTime } from '../interceptors/time.interceptor';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private apiUrl = `${environment.apiUrl}v1/empleados`;

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get<Empleado[]>(this.apiUrl, { context: checkTime()} );
  }
  
  getById(id: number) {
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }

  create(empleado: Empleado) {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  update(empleado: Empleado) {
    return this.http.put<Empleado>(`${this.apiUrl}/${empleado.id}`, empleado);
  }

  delete(id: number) {
    return this.http.delete<Empleado>(`${this.apiUrl}/${id}`);
  }
}
