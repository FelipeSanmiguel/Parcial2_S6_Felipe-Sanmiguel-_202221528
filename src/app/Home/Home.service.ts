import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aerolinea } from './aerolinea';
import { Vuelo } from './vuelo';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAerolineas(): Observable<Aerolinea[]> {
      return this.http.get<Aerolinea[]>(this.apiUrl);
    }

}
