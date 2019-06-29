import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
@Component({
  selector: 'app-produtospesquisa',
  templateUrl: './produtospesquisa.component.html',
  styleUrls: ['./produtospesquisa.component.css']
})
export class ProdutospesquisaComponent implements OnInit {

  produtos = [];
  nomeBusca:string;

  constructor(
    private service:ProdutosService,
    private msg:MessageService,
    private conf: ConfirmationService) { }
  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.produtos=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(produto:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+produto.nome+'?',
      accept: () => {
        this.excluir(produto);
      }
    });
  }

  excluir(produto: any)
  {
    this.service.excluir(produto.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Produto '+ produto.nome + ' excluido'});
    });
  }
}
