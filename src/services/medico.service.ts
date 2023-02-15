import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError, Observable } from 'rxjs';
import { CreateMedicoDTO, Medico, UpdateMedicoDTO } from 'src/model/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

   apiUrl="http://localhost:8080/api/v1/medico";
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(
    private http: HttpClient
  ) { }
  
  getAllMedicos():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.apiUrl)
  }
  getMedico(id: number) {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El Medico no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('No estas permitido');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateMedicoDTO) :Observable<any> {
     return this.http.post<any>(this.apiUrl, dto)
  }
  

  update(id: number, dto: UpdateMedicoDTO) {
    return this.http.put<Medico>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
