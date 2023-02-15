
export interface Medico{
    id: number;
    nombre: string;
    apellidoPaterno : string;
    apellidoMaterno : string;
    sexo: string;
    fechaNacimiento : string;
    cedulaProfecional: string;
    universidad:    string;
    foto: string;
    nombreCompleto: string;
}
export interface CreateMedicoDTO extends Omit<Medico, 'id' | 'nombreCompleto'> {
    
  }
  
export interface UpdateMedicoDTO extends Partial<CreateMedicoDTO> { }