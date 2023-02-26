import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';

import { MedicoDetailComponent } from './medico-detail/medico-detail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicoComponent,
    MedicoDetailComponent
  ],
  exports: [
    MedicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class MedicoModule { }
