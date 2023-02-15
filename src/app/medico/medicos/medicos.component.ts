import { Component, OnInit } from '@angular/core';
import { CreateMedicoDTO, Medico } from 'src/model/medico.model';
import { MedicoService } from 'src/services/medico.service';

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
  .subscribe(
    data =>{
      console.log(data);
     this.medicos=data;
    }
  )
}
toggleMedicoDetail() {
  this.showMedicoDetail = !this.showMedicoDetail;
}

onShowDetail(id: number) {
  console.log(id);
  this.statusDetail = 'loading';
  this.toggleMedicoDetail();
  this.medicoService.getMedico(id)
  .subscribe(data => {
    this.medicoChosen = data;
    this.statusDetail = 'success';
  }, errorMsg => {
    window.alert(errorMsg);
    this.statusDetail = 'error';
  })
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
  /*const changes: UpdateMedicoDTO = {
    title: 'change title',
  }
  const id = this.productChosen.id;
  this.productsService.update(id, changes)
  .subscribe(data => {
    const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
    this.products[productIndex] = data;
    this.productChosen = data;
  });*/
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

loadMore() {
 /* this.medicoService.getAllMedico(this.limit, this.offset)
  .subscribe(data => {
    this.medicos = this.medicos.concat(data);
    this.offset += this.limit;
  });*/
}
}
