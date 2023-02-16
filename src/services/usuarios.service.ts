import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUsuarioDTO, Usuario } from 'src/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl ='/api/v1/'

  constructor(
    private http: HttpClient
  ) { }

  create(dto: CreateUsuarioDTO) {
    return this.http.post<Usuario>(this.apiUrl, dto);
  }

  getAll() {
    return this.http.get<Usuario[]>(this.apiUrl);
  }
}
