import { Estado } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  estadosURL = 'http://localhost:8081/estados';
  urlFiltro;
  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8081/estados/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8081/estados';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
      return this.http.delete(this.estadosURL+"/"+id)
      .toPromise()
      .then(() => null);
  }

  adicionar(estado: Estado): Promise<any>{
    return this.http.post(this.estadosURL, estado)
    .toPromise();
  }

  alterar(estado: Estado): Promise<any>{
    return this.http.put(this.estadosURL+'/'+estado.id, estado)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Estado> {
    return this.http.get<Estado>(this.estadosURL+'/'+codigo).toPromise();
  }
}
