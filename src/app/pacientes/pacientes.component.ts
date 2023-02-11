import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from 'src/services/paciente.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent {

@Input()  img : string= 'valor inicial';
  
  validadorNumeros = Validators.compose([Validators.pattern(/^[0-9]\d*$/),Validators.required,Validators.minLength(1),Validators.maxLength(4)])
  
  formRegistrarPaciente = this.fb.group({

    nombre: ['',[Validators.required]],
    apellidoPaterno:  ['',[Validators.required,Validators.minLength(3)]],
    apellidoMaterno:  ['',[Validators.required,Validators.maxLength(3)]],
    fechaNacimiento:['',[Validators.required]],
    sexo:['',[Validators.required,Validators.maxLength(1)]],
    correo:  ['',[Validators.email, Validators.required]],
    calle:  [''],
    numeroExterior:  ['',this.validadorNumeros],
    numeroInterior:  ['',this.validadorNumeros],
    codigoPostal:  [''],
    alcaldia:  [''],
    referenciaDomicilio:  ['']
    
  });

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) { }

  registrarPaciente(): void {
    console.log(this.formRegistrarPaciente.value);

  }

  getErrorCorreo() {
    if(this.formRegistrarPaciente.controls['correo'].hasError('required')) {
      return 'Ingresa un correo necesariamnete'
    }
    return this.formRegistrarPaciente.controls['correo'].hasError('email') ? 'No es un correo con formato correcto' : ''
  }


  ngOnInit(): void{
    let id= sessionStorage.getItem('id');
    if(id != null){
      this.pacienteService.obtenerPaciente(id).subscribe(paciente => {
        console.log(paciente);
        this.formRegistrarPaciente.patchValue({
            nombre: paciente.nombre,
            apellidoPaterno: paciente.apellidoPaterno,
            apellidoMaterno: paciente.apellidoMaterno,
            sexo:paciente.sexo,
            fechaNacimiento: paciente.fechaNacimiento
        })  
      });
    }else{
      console.log("Sin Sesion");
    }
  }



}
