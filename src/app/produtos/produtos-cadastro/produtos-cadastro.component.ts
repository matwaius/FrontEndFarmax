import { ProdutosService } from './../produtos.service';
import { Produto } from './../model';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css']
})
export class ProdutosCadastroComponent implements OnInit {

  produto = new Produto();
  constructor(
    private service: ProdutosService,
    private messageService: MessageService,
    private rota: ActivatedRoute,
    //private rotaP: Router
    ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    this.service.adicionar(this.produto)
    .then( ()=>{
      this.messageService.add({severity:'success', summary:'Cadastro', detail:'Produto '+this.produto.nome+' cadastrado'});
      form.reset();
    });
  }
}
