import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacientesComponent } from './pacientes/pacientes.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { WelcomeComponent } from './home/welcome/welcome.component';


const rutas: Routes = [
    {
        path: 'paciente',
        component: PacientesComponent
    },
    {
        path: 'expediente',
        component: ExpedienteComponent
    },
    {
      path: 'welcome',
      component: WelcomeComponent
    },
    {
        path:'',
        redirectTo:'/welcome',
        pathMatch:'full'
    },
    {
        path:'**',
        component: NoEncontradoComponent
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
export class AppRoutingModule { }
