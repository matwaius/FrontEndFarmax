import { MessageService } from 'primeng/api';
import { VendasService } from '../vendas.service';
import { Component, OnInit } from '@angular/core';
import { Venda } from '../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendas-cadastro',
  templateUrl: './vendas-cadastro.component.html',
  styleUrls: ['./vendas-cadastro.component.css']
})
export class VendasCadastroComponent implements OnInit {

  venda = new Venda();

  constructor(
    private service: VendasService,
    private messageService: MessageService,
    private rota: ActivatedRoute
    ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.venda)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Venda '+this.venda.id+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoVenda = this.rota.snapshot.params['id'];
    console.log(codigoVenda);
    if(codigoVenda){
      this.carregarVenda(codigoVenda);
    }
  }

  carregarVenda(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.venda = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.venda)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'Venda '+this.venda.id+' alterada'});
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
    return Boolean(this.venda.id);
  }



}
