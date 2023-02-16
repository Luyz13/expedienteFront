export interface Usuario {
    id: string;
    email: string;
    password: string;
    name: string;
  }
  
  export interface CreateUsuarioDTO extends Omit<Usuario, 'id'> {}