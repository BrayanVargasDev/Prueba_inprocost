import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { EmpresaService } from './services/empresa.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'improcost';
  

  constructor(
    private authService: AuthService,
    private empresaService: EmpresaService
  ) {}


}
