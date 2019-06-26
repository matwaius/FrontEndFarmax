import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CidadesService } from './../cidades.service';
import { Component, OnInit } from '@angular/core';
import { Cidade } from '../model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cidades-cadastro',
  templateUrl: './cidades-cadastro.component.html',
  styleUrls: ['./cidades-cadastro.component.css']
})
export class CidadesCadastroComponent implements OnInit {

  cidade = new Cidade();
  estados =[];

  constructor(
    private service: CidadesService,
    private messageService: MessageService,
    private rota: ActivatedRoute

  ) { }

  ngOnInit() {
    this.pesquisarEstados();
  }

  salvar(form: FormControl)
  {
    this.service.adicionar(this.cidade)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Cidade '+this.cidade.nome+' cadastrado'});
      form.reset();
    });
  }

  pesquisarEstados()
  {
      this.service.listarUF()
      .then((dados)=>{
        this.estados = dados
        .map(e=> ({label: e.estado, value: e.id}));
      });
  }

}
