import { NgModule } from '@angular/core';
import { VendasService } from './vendas.service';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { VendaspesquisaComponent } from './vendaspesquisa/vendaspesquisa.component';
import { VendasCadastroComponent } from './vendas-cadastro/vendas-cadastro.component';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [VendaspesquisaComponent, VendasCadastroComponent],
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
     VendaspesquisaComponent,
     VendasCadastroComponent
  ],
  providers:[
    VendasService,
    MessageService
  ]
})
export class VendasModule { }
