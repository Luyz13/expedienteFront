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
  getAllMedicoss(limit?: number, offset?: number) {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Medico[]>(this.apiUrl+"/", { params })
    .pipe(
      retry(3)
    );
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

  getMedicoByPage(limit: number, offset: number) {
    return this.http.get<Medico[]>(`${this.apiUrl}`, {
      params: { limit, offset }
    })
  }

  create(dto: CreateMedicoDTO) :Observable<any> {
     return this.http.post<any>(this.apiUrl, dto)
  }
  

  update(id: string, dto: UpdateMedicoDTO) {
    return this.http.put<Medico>(`${this.apiUrl}/${id}`, dto);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
