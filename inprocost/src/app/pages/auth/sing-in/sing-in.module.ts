import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingInRoutingModule } from './sing-in-routing.module';
import { SingInComponent } from './sing-in.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    SingInRoutingModule,
    FormModule
  ]
})
export class SingInModule { }
