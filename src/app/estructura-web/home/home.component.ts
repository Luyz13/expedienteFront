import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/services/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(
    private pacienteService: PacienteService)
  {}
  /*
  ngOnInit(): void{
    
      this.pacienteService.obtenerPaciente(id).subscribe(paciente => {
        console.log(paciente);
       
        })  
      });
    
  }*/

}
