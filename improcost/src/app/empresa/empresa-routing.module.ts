import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadEmpresasComponent } from './pages/read-empresas/read-empresas.component';
import { CreateEmpresasComponent } from './pages/create-empresas/create-empresas.component';
import { UpdateEmpresasComponent } from './pages/update-empresas/update-empresas.component';
import { DetailEmpresasComponent } from './pages/detail-empresas/detail-empresas.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '', 
    component: LayoutComponent, 
    children: [
      { path: '', redirectTo: 'read', pathMatch: 'full' },
      { path: 'read', component: ReadEmpresasComponent },
      { path: 'create', component: CreateEmpresasComponent },
      { path: 'update/:id', component: UpdateEmpresasComponent },
      { path: 'detail/:id', component: DetailEmpresasComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule { }
