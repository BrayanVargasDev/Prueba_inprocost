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

  getAll() {
    return this.http.get<Empresa[]>(this.apiUrl);
  }
  
  getById(id: number) {
    return this.http.get<Empresa>(`${this.apiUrl}/${id}`);
  }

  create(empresa: Empresa) {
    return this.http.post<Empresa>(this.apiUrl, empresa);
  }

  update(empresa: Empresa) {
    return this.http.put<Empresa>(`${this.apiUrl}/${empresa.id}`, empresa);
  }

  delete(id: number) {
    return this.http.delete<Empresa>(`${this.apiUrl}/${id}`);
  }
}
