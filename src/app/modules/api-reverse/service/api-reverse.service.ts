import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiReverseService {

  constructor(
    private http: HttpClient
  ) { }

  RESOURCE: string = `${environment.urlOpenstreetmap}/reverse?format=jsonv2&`;

  getOpenStreetMap(lat: string, lon: string): Observable<any> {
    return this.http.get<any>(`${this.RESOURCE}&lat=${lat}&lon=${lon}`);
  }

}
