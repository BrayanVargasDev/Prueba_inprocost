import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa.model';
import { AuthService } from 'src/app/services/auth.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private empresas: Empresa[] = [];

  constructor(
    private empresaService: EmpresaService,
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.login();
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresaService.getAll().subscribe(
      (empresas: Empresa[]) => {
        this.empresas = empresas;
        console.log(this.empresas);
      }
    );
  }

  login() {
    this.authService.login(
      'admin@admin',
      'contraseña',
      'navegador'
    );
  }

}
