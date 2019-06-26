import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cidade } from './model';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  cidadesURL = 'http://localhost:8081/cidades';

  constructor(private http: HttpClient) { }

  listarUF(): Promise<any>
  {
    return this.http.get<any>('http://localhost:8081/estados').toPromise();
  }

  adicionar(cidade: Cidade): Promise<any>
  {
     return this.http.post(this.cidadesURL, cidade)
     .toPromise();
  }
}
