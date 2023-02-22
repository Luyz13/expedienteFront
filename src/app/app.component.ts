import { Component } from '@angular/core';
import { CreateUsuarioDTO, LoginUsuarioDTO, Usuario } from 'src/model/usuario.model';

import { AuthService } from 'src/services/auth.service';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app_expediente_levm';
  token = '';

  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
  ){}
  
  createUser(){
    const usuario: CreateUsuarioDTO={
      username:"alexandra",
      email: "alex@correo.com",
      rol:"ROL_USER",
      password: "alexMeli"
    }
    this.usuariosService.create(usuario)
    .subscribe( rta => {
      console.log(rta);
      alert(rta);
    });
  }



}
