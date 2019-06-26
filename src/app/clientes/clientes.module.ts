import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientespesquisaComponent } from './clientespesquisa/clientespesquisa.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientespesquisaComponent, ClientesCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
     ClientespesquisaComponent,
     ClientesCadastroComponent
  ],
  providers:[
    ClientesService,
    MessageService
  ]
})
export class ClientesModule { }
