import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ExpedienteComponent } from './expediente/expediente.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';  
import {MatIconModule} from '@angular/material/icon'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { ImgComponent } from "./img/img.component";
import { MedicamentoComponent } from './medicamento/medicamento.component';

@NgModule({
    declarations: [
        AppComponent,
        PacientesComponent,
        ExpedienteComponent,
        NoEncontradoComponent,
        ImgComponent,
        MedicamentoComponent
    ],
    providers: [provideNgxMask()],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatIconModule,
        MatTooltipModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        NgxMaskDirective,
        NgxMaskPipe,
        HttpClientModule,
        FormsModule
        
    ]
})
export class AppModule { }
