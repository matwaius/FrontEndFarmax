import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
@Component({
  selector: 'app-clientespesquisa',
  templateUrl: './clientespesquisa.component.html',
  styleUrls: ['./clientespesquisa.component.css']
})
export class ClientespesquisaComponent implements OnInit {

  clientes = [];
  nomeBusca:string;

  constructor(
    private service:ClientesService,
    private msg:MessageService,
    private conf: ConfirmationService) { }
  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.clientes=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(cliente:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+cliente.nome+'?',
      accept: () => {
        this.excluir(cliente);
      }
    });
  }

  excluir(cliente: any)
  {
    this.service.excluir(cliente.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Cliente '+ cliente.nome + ' excluida'});
    });
  }
}
