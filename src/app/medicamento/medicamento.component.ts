import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Medicamento } from 'src/model/medicamento.model';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent {
  
  @Input() medicamento!:Medicamento ;

  @Output() addedMedicamento = new EventEmitter<Medicamento>();

  onAddToCart(){
    this.addedMedicamento.emit(this.medicamento);
  }

}
