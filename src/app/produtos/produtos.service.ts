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

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8081/produtos/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8081/produtos';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
    return this.http.delete(this.produtosURL+"/"+id)
    .toPromise()
    .then(() => null);
}

  adicionar(produto: Produto): Promise<any>{
    return this.http.post(this.produtosURL, produto)
    .toPromise();
  }

  alterar(produto: Produto): Promise<any>{
    return this.http.put(this.produtosURL+'/'+produto.id, produto)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Produto> {
    return this.http.get<Produto>(this.produtosURL+'/'+codigo).toPromise();
  }
}

