import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { HeaderComponent } from './estructura-web/header/header.component';
import { BodyComponent } from './estructura-web/body/body.component';
import { FooterComponent } from './estructura-web/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientesComponent,
    ExpedienteComponent,
    NoEncontradoComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
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
    HttpClientModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
