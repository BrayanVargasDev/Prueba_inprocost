import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = `${environment.apiUrl}v1/empresas`;

  constructor(
    private http: HttpClient
  ) { }

  getAll(token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Empresa[]>(this.apiUrl, { headers });
  }
  
  getById(id: number, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`, { headers });
  }

  create(empresa: Empresa, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Empresa>(this.apiUrl, empresa, { headers });
  }

  update(empresa: Empresa, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<Empresa>(`${this.apiUrl}/${empresa.id}`, empresa, { headers });
  }

  delete(id: number, token: string) {
    const headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<Empresa>(`${this.apiUrl}/${id}`, { headers });
  }
}
