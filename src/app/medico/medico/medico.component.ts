import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Medico } from 'src/model/medico.model';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  @Input() medico!:Medico ;
  
  @Output() showMedico = new EventEmitter<number>();

  onShowDetail() {
    this.showMedico.emit(this.medico.id);
  }
}
