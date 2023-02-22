import { Component } from '@angular/core';
import { LoginUsuarioDTO } from 'src/model/usuario.model';
import { AuthService } from 'src/services/auth.service';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  activeMenu = false;
  token='';
  correo='';
  
  constructor(
    private authService: AuthService,
    private usuariosService: UsuariosService,
  ){}
  
  toggleMenu(){
    this.activeMenu= !this.activeMenu;
  }
  login(){
    const userLogin:LoginUsuarioDTO={
      username:"alexandra",
      password:"alexMeli"
    }
     this.authService.login(userLogin)
      .subscribe(rta => {
        console.log(rta.accessToken);
        this.token=rta.accessToken;
        this.correo=rta.email;
      });
  }
}