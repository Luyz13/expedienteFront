import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medico } from 'src/model/medico.model';
import { MedicoService } from 'src/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  medicos: Medico[]= [];
  medicoId: string | null = null;
  constructor(
    private medicoService: MedicoService,
    private route:ActivatedRoute)
  {}
  
  ngOnInit(): void{
    this.medicoService.getAllMedicos()
    .subscribe({
      next: (data) =>{
        console.log(data);
       this.medicos=data;
      },
      error: (errorMsg) => {
        Swal.fire({
          title: 'Error!',
          text: 'Hubo un problema con el servidor',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }});
    //
    this.route.queryParamMap.subscribe(params => {
      this.medicoId= params.get('medico');
      console.log(this.medicoId);
    } )
    
  }

}
