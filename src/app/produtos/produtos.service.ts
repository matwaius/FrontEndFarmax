import { Produto } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtosURL = 'http://localhost:8081/produtos';
  urlFiltro;
  constructor(private http: HttpClient) { }

  adicionar(produto: Produto): Promise<any>{
    return this.http.post(this.produtosURL, produto)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Produto> {
    return this.http.get<Produto>(this.produtosURL+'/'+codigo).toPromise();
  }
}

