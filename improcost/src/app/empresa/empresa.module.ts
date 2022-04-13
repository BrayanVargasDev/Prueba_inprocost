import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ReadEmpresasComponent } from './pages/read-empresas/read-empresas.component';
import { CreateEmpresasComponent } from './pages/create-empresas/create-empresas.component';
import { UpdateEmpresasComponent } from './pages/update-empresas/update-empresas.component';
import { DetailEmpresasComponent } from './pages/detail-empresas/detail-empresas.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ReadEmpresasComponent,
    CreateEmpresasComponent,
    UpdateEmpresasComponent,
    DetailEmpresasComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
