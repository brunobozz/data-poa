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

  RESOURCE: string = `${environment.urlPoatransporte}/doc/digital/professionals`;

  getLinhas(type: string): Observable<any>{
    return this.http.get<any>(`${this.RESOURCE}?a=nc&p=%&t=${type}`);
  }

  getItinerario(id: String): Observable<any>{
    return this.http.get<any>(`${this.RESOURCE}?a=il&p=${id}`);
  }
}
