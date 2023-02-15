import { Component } from '@angular/core';
import { Medicamento } from 'src/model/medicamento.model';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent {

  myShoppingCart: Medicamento[] = [];
  medicamentos: Medicamento[]=
  [
    {
      idMedicamento: 1,
      denominacion: 'Paracetamol',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
      img: 'https://source.unsplash.com/random'
    },
    {
      idMedicamento: 2,
      denominacion: 'Medicamento2',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
      img: 'https://source.unsplash.com/random'
    },
    {
      idMedicamento: 3,
      denominacion: 'Medicamento3',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
      img: 'https://source.unsplash.com/random'
    },
    {
      idMedicamento: 4,
      denominacion: 'Medicamento4',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
      img: 'https://source.unsplash.com/random'
    },
    
    {
      idMedicamento: 5,
      denominacion: 'Medicamento5',
      viaAdministracion: 'Topica',
      frecuencia: 'Diaria',
      duracion: '5 dias',
      img: 'https://source.unsplash.com/random'
    },
  ];
  onAddToShoppingCart(medicamento: Medicamento){
    console.log(medicamento);
    this.myShoppingCart.push(medicamento);
  }

}
