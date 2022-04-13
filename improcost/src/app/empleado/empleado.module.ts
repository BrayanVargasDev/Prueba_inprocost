import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoRoutingModule } from './empleado-routing.module';
import { ReadEmpleadoComponent } from './pages/read-empleado/read-empleado.component';
import { CreateEmpleadoComponent } from './pages/create-empleado/create-empleado.component';
import { UpdateEmpleadoComponent } from './pages/update-empleado/update-empleado.component';
import { DetailEmpleadoComponent } from './pages/detail-empleado/detail-empleado.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ReadEmpleadoComponent,
    CreateEmpleadoComponent,
    UpdateEmpleadoComponent,
    DetailEmpleadoComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    EmpleadoRoutingModule
  ]
})
export class EmpleadoModule { }
