import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadEmpleadoComponent } from './pages/read-empleado/read-empleado.component';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';
import { DetailEmpleadoComponent } from './pages/detail-empleado/detail-empleado.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'read', pathMatch: 'full' },
      { path: 'read', component: ReadEmpleadoComponent },
      { path: 'create', component: CreateEmpleadoComponent },
      { path: 'update/:id', component: UpdateEmpleadoComponent },
      { path: 'detail/:id', component: DetailEmpleadoComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
