import { Component } from '@angular/core';
import { Medicamento } from 'src/model/medicamento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgParent='';
  showImg = true;

  medicamentos: Medicamento[]=
  [
    {
      idMedicamento: 1,
      denominacion: 'Paracetamol',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
    },
    {
      idMedicamento: 2,
      denominacion: 'Medicamento2',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
    },
    {
      idMedicamento: 3,
      denominacion: 'Medicamento3',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
    },
    {
      idMedicamento: 4,
      denominacion: 'Medicamento4',
      viaAdministracion: 'Oral',
      frecuencia: 'Diaria',
      duracion: '5 dias',
    },
  ];

  title = 'app_expediente_levm';
  btnDisabled= true;
  algo = 'nuevo';
  num: number= 0;
  names: string[]=['Luis','Eduardo','Yimell','Alexandra'];
  newName: string ='';
  onLoaded(img:String){
    console.log('log desde el Padre',img);
  }


  toogleButton(){
    this.btnDisabled=!this.btnDisabled;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event : Event){
    const element = event.target as HTMLInputElement;
    this.algo=element.value;
  }
  addName()
  {
    this.names.push(this.newName)
    this.newName=''
  }
  deleteName(index:number)
  {
    this.names.splice(index,1);
  }
  toogleImg(){
    this.showImg= !this.showImg
  }
}
