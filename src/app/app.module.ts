import { CidadesModule } from './cidades/cidades.module';
import { CidadesCadastroComponent } from './cidades/cidades-cadastro/cidades-cadastro.component';
import { ButtonModule } from 'primeng/button';
import { ClientesCadastroComponent } from './clientes/clientes-cadastro/clientes-cadastro.component';
import { ClientespesquisaComponent } from './clientes/clientespesquisa/clientespesquisa.component';
import { ClientesModule } from './clientes/clientes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
import { Routes,RouterModule} from '@angular/router';
import { EstadospesquisaComponent } from './estados/estadospesquisa/estadospesquisa.component';
import { EstadosCadastroComponent } from './estados/estados-cadastro/estados-cadastro.component';
import { EstadosModule } from './estados/estados.module';
import { SidebarModule } from 'primeng/sidebar';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosModule } from './produtos/produtos.module';

const rotas: Routes = [
  {path: '',redirectTo:'clientes', pathMatch:'full'},
  {path: 'cidades', component: CidadesCadastroComponent},
  {path: 'clientes', component: ClientespesquisaComponent},
  {path: 'clientes/novo', component: ClientesCadastroComponent},
  {path: 'clientes/:id', component: ClientesCadastroComponent},
  {path: 'produtos', component: ProdutosCadastroComponent},
  {path: 'produtos/:id', component: EstadosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientesModule,
    CidadesModule,
    EstadosModule,
    ProdutosModule,
    HttpClientModule,
    RouterModule.forRoot(rotas),
    SidebarModule,
    ButtonModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
