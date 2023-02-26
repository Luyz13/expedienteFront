import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';
import { ImgComponent } from './img/img.component';
import { MedicoDetailComponent } from './medico-detail/medico-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicoComponent,
    ImgComponent,
    MedicoDetailComponent
  ],
  exports: [
    MedicosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MedicoModule { }
