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
import { VendaspesquisaComponent } from './vendas/vendaspesquisa/vendaspesquisa.component';
import { VendasCadastroComponent } from './vendas/vendas-cadastro/vendas-cadastro.component';
import { VendasModule } from './vendas/vendas.module';
import { SidebarModule } from 'primeng/sidebar';
import { ProdutosCadastroComponent } from './produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutospesquisaComponent } from './produtos/produtospesquisa/produtospesquisa.component';
import { ProdutosModule } from './produtos/produtos.module';

const rotas: Routes = [
  {path: '',redirectTo:'clientes', pathMatch:'full'},
  {path: 'clientes', component: ClientespesquisaComponent},
  {path: 'clientes/novo', component: ClientesCadastroComponent},
  {path: 'clientes/:id', component: ClientesCadastroComponent},
  {path: 'produtos', component: ProdutospesquisaComponent},
  {path: 'produtos/novo', component: ProdutosCadastroComponent},
  {path: 'produtos/:id', component: ProdutosCadastroComponent},
  {path: 'vendas', component: VendaspesquisaComponent},
  {path: 'vendas/novo', component: VendasCadastroComponent},
  {path: 'vendas/:id', component: VendasCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClientesModule,
    VendasModule,
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
