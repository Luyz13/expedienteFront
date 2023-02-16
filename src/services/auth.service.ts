import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { Auth } from 'src/model/auth.model';
import { Usuario } from 'src/model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '/api/v1/auth';

  constructor(
    private http: HttpClient
  ) { }


login(email: string, password: string) {
  return this.http.post<Auth>('/api/v1/login', {email, password});
}

getProfile(token: string) {
  // const headers = new HttpHeaders();
  // headers.set('Authorization',  `Bearer ${token}`);
  return this.http.get<Usuario>('/api/v1/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
      // 'Content-type': 'application/json'
    }
  });
}

loginAndGet(email: string, password: string) {
  return this.login(email, password)
  .pipe(
    switchMap(rta => this.getProfile(rta.access_token)),
  )
}
}