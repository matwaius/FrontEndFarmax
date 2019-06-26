import { NgModule } from '@angular/core';
import { EstadosService } from './estados.service';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EstadospesquisaComponent } from './estadospesquisa/estadospesquisa.component';
import { EstadosCadastroComponent } from './estados-cadastro/estados-cadastro.component';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [EstadospesquisaComponent, EstadosCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    ToastModule,
    FormsModule,
    DropdownModule,
    ConfirmDialogModule,
    RouterModule
  ],
  exports:[
     EstadospesquisaComponent,
     EstadosCadastroComponent
  ],
  providers:[
    EstadosService,
    MessageService
  ]
})
export class EstadosModule { }
