import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medico/medico.component';
import { ImgComponent } from './img/img.component';




@NgModule({
    declarations: [
        MedicosComponent,
        MedicoComponent,
        ImgComponent
    ],
    exports: [
        MedicosComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class MedicoModule { }
