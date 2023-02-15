import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, throwError, Observable } from 'rxjs';
import { CreateMedicoDTO, Medico, UpdateMedicoDTO } from 'src/model/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

   apiUrl="/api/v1/medico";
   httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(
    private http: HttpClient
  ) { }
  
  getAllMedicos():Observable<Medico[]>{
    return this.http.get<Medico[]>(this.apiUrl)
    .pipe(retry(3));
  }
  getMedico(id: number) {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError(() => new Error("Algo esta fallando en el server"));
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError(() => new Error("El Medico no existe"));
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError(() => new Error("No estas permitido"));
          
        }
        return throwError(() => new Error("Ups algo salio mal"));
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
