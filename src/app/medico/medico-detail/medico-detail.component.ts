import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Medico } from 'src/model/medico.model';
import { MedicoService } from 'src/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico-detail',
  templateUrl: './medico-detail.component.html',
  styleUrls: ['./medico-detail.component.css']
})
export class MedicoDetailComponent implements OnInit {

  medicoId: string|null=null;
  medico: Medico|null=null;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private medicoService: MedicoService)
  {  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.medicoId = params.get('id');
          if (this.medicoId) {
            return this.medicoService.getMedico(this.medicoId);
          }
          return [null];
        })
      ).subscribe(
        {
          next: (data) => {
            console.log(data);
            this.medico=data;
          },
          error: (errorMsg) => {
            Swal.fire({
              title: 'Error!',
              text: 'Hubo un problema con el servidor',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        }
      );
  }
  goToBack(){
    this.location.back();
  }

}


