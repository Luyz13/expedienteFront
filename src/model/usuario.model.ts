import { Rol } from "./rol.model";


export interface Usuario {
    id: number;
    username: string;
    email: string;
    password: string;  
    rol?: string;
    roles?:Rol[]
  }
  
  export interface CreateUsuarioDTO extends Omit<Usuario, 'id'> {}

  export interface LoginUsuarioDTO extends Omit<Usuario, 'id'|'email'> {}