import { ProdutosService } from './produtos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ProdutospesquisaComponent } from './produtospesquisa/produtospesquisa.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { RouterModule } from '@angular/router';
import {PickListModule} from 'primeng/picklist';
import { CurrencyMaskModule } from "ng2-currency-mask";
@NgModule({
  declarations: [ProdutospesquisaComponent, ProdutosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule,
    PickListModule,
    CurrencyMaskModule
  ],
  exports:[
     ProdutosCadastroComponent,
     ProdutospesquisaComponent
  ],
  providers:[
    ProdutosService,
    MessageService
  ]
})
export class ProdutosModule { }
