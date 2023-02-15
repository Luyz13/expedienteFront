import { Component, OnInit } from '@angular/core';
import { CreateMedicoDTO, Medico, UpdateMedicoDTO } from 'src/model/medico.model';
import { MedicoService } from 'src/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit{

  medicos: Medico[]= [];
  medicoChosen!:Medico ;
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';
  showMedicoDetail = false;
    /*{
    id: 1,
    nombre: "medico",
    apellidoPaterno : "paterno",
    apellidoMaterno : "materno",
    sexo: "M",
    fechaNacimiento : "02/12/1985",
    cedulaProfesional: "QWERTYU",
    universidad:    "UAEM",
    foto: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 2,
    nombre: "medico2",
    apellidoPaterno : "paterno2",
    apellidoMaterno : "materno2",
    sexo: "M",
    fechaNacimiento : "02/12/1985",
    cedulaProfesional: "wertyuio",
    universidad:    "UAEM",
    foto: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 3,
    nombre: "medico3",
    apellidoPaterno : "paterno3",
    apellidoMaterno : "materno3",
    sexo: "M",
    fechaNacimiento : "02/12/1985",
    cedulaProfesional: "xcvbnm",
    universidad:    "UAEM",
    foto: "https://www.w3schools.com/howto/img_avatar.png",
  },
  {
    id: 4,
    nombre: "medico4",
    apellidoPaterno : "paterno4",
    apellidoMaterno : "materno4",
    sexo: "F",
    fechaNacimiento : "02/12/1985",
    cedulaProfesional: "dfghjkl",
    universidad:    "UNAM",
    foto: "https://www.w3schools.com/howto/img_avatar2.png",
  },
  {
    id: 5,
    nombre: "medico5",
    apellidoPaterno : "paterno5",
    apellidoMaterno : "materno5",
    sexo: "F",
    fechaNacimiento : "02/12/1985",
    cedulaProfesional: "NBVCXZ",
    universidad:    "UICUI",
    foto: "https://www.w3schools.com/howto/img_avatar2.png",
  }
];*/
constructor(
  private medicoService: MedicoService
){}

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
  
}
toggleMedicoDetail() {
  this.showMedicoDetail = !this.showMedicoDetail;
}

onShowDetail(id: number) {
  console.log(id);
  /*this.statusDetail = 'loading';
  this.toggleMedicoDetail();
  this.medicoService.getMedico(id)
  .subscribe(data => {
    this.medicoChosen = data;
    this.statusDetail = 'success';
  }, errorMsg => {
    window.alert(errorMsg);
    this.statusDetail = 'error';
  })
}*/
this.statusDetail = 'loading';
this.medicoService.getMedico(id).subscribe({
  next: (data) => {
    this.toggleMedicoDetail();
    this.medicoChosen = data;
    this.statusDetail = 'success';
  },
  error: (errorMsg) => {
    this.statusDetail = 'error';
    Swal.fire({
      title: 'Error!',
      text: errorMsg,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
  }
});
}

createNewMedico() {
  const medico: CreateMedicoDTO = {
    nombre: "Karina",
    apellidoMaterno: "Balderas",
    apellidoPaterno: "Perez",
    fechaNacimiento: "02/02/1971",
    sexo: "F",
    cedulaProfecional:"RTYUIOP",
    universidad: "UICUI"
  }
 this.medicoService.create(medico)
  .subscribe(data => {
    console.log(data);
    this.medicos.unshift(data);
  });
  this.medicoService.create(medico)
  .subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (e) => console.error(e)
  });
}

updateMedico() {
  const changes: UpdateMedicoDTO = {
    nombre: "IRMA",
    apellidoMaterno: "Balderas",
    apellidoPaterno: "Perez",
    fechaNacimiento: "02/02/1972",
    sexo: "F",
    cedulaProfecional:"789456123",
    universidad: "El IPN"
  }
  const id = this.medicoChosen.id;
  this.medicoService.update(id, changes)
  .subscribe(data => {
    const productIndex = this.medicos.findIndex(med => med.id === this.medicoChosen.id);
    this.medicos[productIndex] = data;
    this.medicoChosen = data;
  });
}

deleteMedico() {
  const id = this.medicoChosen.id;
  this.medicoService.delete(id)
  .subscribe(() => {
    const medicoIndex = this.medicos.findIndex(item => item.id === this.medicoChosen.id);
    this.medicos.splice(medicoIndex, 1);
    this.showMedicoDetail = false;
  });
}
}
