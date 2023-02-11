import { Component, Input } from '@angular/core';
import { Medicamento } from 'src/model/medicamento.model';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent {
  
  @Input() medicamento!:Medicamento ;

}
