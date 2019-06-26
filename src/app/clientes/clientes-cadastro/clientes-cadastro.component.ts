import { MessageService } from 'primeng/api';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; //Router coloca junto como parametro para redirecionar

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  cliente = new Cliente();

  constructor(
    private service: ClientesService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
    ) { }

  inserir(form: FormControl) {
    this.service.adicionar(this.cliente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Cliente '+this.cliente.nome+' cadastrado'});
      form.reset();
    });
  }

  ngOnInit() {
    const codigoCliente = this.rota.snapshot.params['id'];
    console.log(codigoCliente);
    if(codigoCliente){
      this.carregarCliente(codigoCliente);
    }
  }

  carregarCliente(id:number){
    this.service.buscarPorCodigo(id)
      .then((data) => {
        this.cliente = data;
      }
    );
  }

  alterar(form: FormControl) {
    this.service.alterar(this.cliente)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Edição', detail:'cliente '+this.cliente.nome+' alterado'});
      form.reset();
    });
  }

  salvar(form: FormControl) {
    if(this.editando){
      this.alterar(form);
    }else{
      this.inserir(form);
    }
    //this.rotaP.navigate(['/categorias']); //ao salvar redireciona para a pág categorias
  }


  get editando(){
    return Boolean(this.cliente.id);
  }



}
