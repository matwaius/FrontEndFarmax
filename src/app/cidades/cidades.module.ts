import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CidadesCadastroComponent } from './cidades-cadastro/cidades-cadastro.component';
import { CidadesService } from './cidades.service';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterModule } from '@angular/router';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [CidadesCadastroComponent],
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
    CidadesCadastroComponent
  ],
  providers:[
    CidadesService,
    MessageService
  ]
})
export class CidadesModule { }
