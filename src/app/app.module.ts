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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { HeaderComponent } from './estructura-web/header/header.component';
import { BodyComponent } from './estructura-web/body/body.component';
import { FooterComponent } from './estructura-web/footer/footer.component';
import { MedicoModule } from "./medico/medico.module";
import { NavComponent } from './nav/nav.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from './estructura-web/home/home.component';
import { LoginComponent } from './estructura-web/login/login.component';
import { RegistroComponent } from './estructura-web/registro/registro.component';
import { PerfilComponent } from './estructura-web/perfil/perfil.component';

@NgModule({
    declarations: [
        AppComponent,
        PacientesComponent,
        ExpedienteComponent,
        NoEncontradoComponent,
        HeaderComponent,
        BodyComponent,
        FooterComponent,
        NavComponent,
        HomeComponent,
        LoginComponent,
        RegistroComponent,
        PerfilComponent
    ],
    providers: [
        provideNgxMask(),
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor,multi:true}],
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
        HomeModule,
        MedicoModule
    ]
})
export class AppModule { }
