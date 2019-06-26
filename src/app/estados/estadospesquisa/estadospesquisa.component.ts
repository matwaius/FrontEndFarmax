import { MessageService, ConfirmationService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { EstadosService } from '../estados.service';
@Component({
  selector: 'app-estadospesquisa',
  templateUrl: './estadospesquisa.component.html',
  styleUrls: ['./estadospesquisa.component.css']
})
export class EstadospesquisaComponent implements OnInit {

  estados = [];
  nomeBusca:string;

  constructor(
    private service:EstadosService,
    private msg:MessageService,
    private conf: ConfirmationService) { }
  pesquisar(){
    this.service.pesquisar({nome:this.nomeBusca})
    .then((dados)=>{
      this.estados=dados;
    });
  }

  ngOnInit() {
    this.pesquisar();
  }

  confirmarExclusao(estado:any){
    this.conf.confirm({
      message: 'Tem certeza que deseja excluir '+estado.nome+'?',
      accept: () => {
        this.excluir(estado);
      }
    });
  }

  excluir(estado: any)
  {
    this.service.excluir(estado.id)
    .then(()=>{
      this.pesquisar();
      this.msg.add({severity:'success', summary:'Service Message', detail:'Estado '+ estado.nome + ' excluido'});
    });
  }
}

