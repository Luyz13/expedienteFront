import { Expediente } from "./expediente.model";

export interface Paciente{
    id: number;
    nombre: string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    sexo: string;
    fechaNacimiento : string;
    expediente : Expediente;
}