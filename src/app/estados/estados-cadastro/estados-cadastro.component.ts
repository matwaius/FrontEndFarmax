import { MessageService } from 'primeng/api';
import { EstadosService } from './../estados.service';
import { Component, OnInit } from '@angular/core';
import { Estado } from '../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-estados-cadastro',
  templateUrl: './estados-cadastro.component.html',
  styleUrls: ['./estados-cadastro.component.css']
})
export class EstadosCadastroComponent implements OnInit {

  estado = new Estado();

  constructor(
    private service: EstadosService,
    private messageService: MessageService,
    private rota: ActivatedRoute
    ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.estado)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Estado '+this.estado.estado+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoEstado = this.rota.snapshot.params['id'];
    console.log(codigoEstado);
    if(codigoEstado){
      this.carregarEstado(codigoEstado);
    }
  }

  carregarEstado(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.estado = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.estado)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Estado '+this.estado.estado+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
  }

  get editando(){
    return Boolean(this.estado.id);
  }



}
