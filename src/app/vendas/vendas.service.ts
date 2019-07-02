import { Venda } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  vendasURL = 'http://localhost:8081/vendas';
  urlFiltro;
  constructor(private http: HttpClient) { }

  pesquisar(filtro: any): Promise<any> {
    if(filtro.nome){
      this.urlFiltro = 'http://localhost:8081/vendas/filtro?nome='+filtro.nome;
    }else{
      this.urlFiltro = 'http://localhost:8081/vendas';
    }

    return this.http.get<any>(this.urlFiltro).toPromise();
  }

  excluir(id:number):Promise<void>{
      return this.http.delete(this.vendasURL+"/"+id)
      .toPromise()
      .then(() => null);
  }

  adicionar(venda: Venda): Promise<any>{
    return this.http.post(this.vendasURL, venda)
    .toPromise();
  }

  alterar(venda: Venda): Promise<any>{
    return this.http.put(this.vendasURL+'/'+venda.id, venda)
    .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Venda> {
    return this.http.get<Venda>(this.vendasURL+'/'+codigo).toPromise();
  }
}
