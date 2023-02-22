import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MedicamentosComponent } from './medicamentos/medicamentos.component';


const rutas: Routes = [
    {
      path: 'medicamentos',
      component: MedicamentosComponent
    }
]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { 
}
