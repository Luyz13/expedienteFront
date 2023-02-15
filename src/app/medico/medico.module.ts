import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';
import { ImgComponent } from './img/img.component';
import { MedicoDetailComponent } from './medico-detail/medico-detail.component';



@NgModule({
  declarations: [
    MedicosComponent,
    MedicoComponent,
    ImgComponent,
    MedicoDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MedicoModule { }
