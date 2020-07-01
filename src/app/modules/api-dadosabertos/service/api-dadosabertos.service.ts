import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiDadosabertosService {
  
  constructor(
    private http: HttpClient
  ) { }

  RESOURCE: string = `${environment.url}/doc/digital/professionals`;

  getLinhasDeOnibus(nome:string): Observable<any>{
    return this.http.get<any>(`${this.RESOURCE}?a=nc&p=%&t=o`);
  }

  getLinhasDeLotacao(): Observable<any>{
    return this.http.get<any>(`${this.RESOURCE}?a=nc&p=%&t=l`);
  }

  getItinerario(id: String): Observable<any>{
    return this.http.get<any>(`${this.RESOURCE}?a=il&p=${id}`);
  }
}
