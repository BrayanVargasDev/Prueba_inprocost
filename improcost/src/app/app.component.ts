import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { EmpresaService } from './services/empresa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'improcost';
  token = '';

  constructor(
    private authService: AuthService,
    private empresaService: EmpresaService
  ) {}

  login() {
    this.authService.login('admin@admin.com', 'contraseña', 'navegador')
      .subscribe(
        (data: any) => {
          this.token = data.token;
        }
      );
  }

  getEmpresa() {
    this.empresaService.getById(1, this.token)
      .subscribe(
        (data: any) => {
          console.log(data);
        }
      );
  }

}
