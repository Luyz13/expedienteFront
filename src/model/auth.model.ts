import { Usuario } from "./usuario.model";

export interface Auth extends Omit<Usuario,'password'>{
    tokenType: string;
    accessToken: string;
  }