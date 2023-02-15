import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Paciente } from '../model/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private httpClient: HttpClient) { }

  obtenerPaciente(id:string) : Observable<Paciente>{
    /*Para cuando se usa @RequestParam(value ="id") del lado del backend
    
    let pararametros = new URLSearchParams();
    pararametros=id;
    pararametros.set("id",id)*/
    return this.httpClient.get<Paciente>("http://localhost:8080/api/v1/paciente/"+id)
  }
}
