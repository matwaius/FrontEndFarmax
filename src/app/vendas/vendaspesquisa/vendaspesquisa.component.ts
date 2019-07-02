import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas.service';
@Component({
  selector: 'app-vendaspesquisa',
  templateUrl: './vendaspesquisa.component.html',
  styleUrls: ['./vendaspesquisa.component.css']
})
export class VendaspesquisaComponent implements OnInit {

  vendas = [];
  nomeBusca:string;

  constructor(
    private service:VendasService,
    private msg:MessageService,
    private conf: ConfirmationService) { }
  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.vendas=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(venda:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+venda.id+'?',
      accept: () => {
        this.excluir(venda);
      }
    });
  }

  excluir(venda: any)
  {
    this.service.excluir(venda.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Venda '+ venda.id + ' excluido'});
    });
  }
}

