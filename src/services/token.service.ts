import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token:string){
    localStorage.setItem('token', token);
  }
  getToken(){
    const token:string|null= localStorage.getItem('token');
    return token;
  }

}
