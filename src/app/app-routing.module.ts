import { CatalogoServicosComponent } from './catalogo-servicos/catalogo-servicos.component';
import { HomeComponent } from './home/home.component';
import { ConsultaPagamentosComponent } from './consulta-pagamentos/consulta-pagamentos.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ConsultaImoveisComponent } from './consulta-imoveis/consulta-imoveis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consulta-imoveis', component: ConsultaImoveisComponent },
  { path: 'catalogo-servicos', component: CatalogoServicosComponent },
  { path: 'lista-imoveis', component: ListaImoveisComponent },
  { path: 'pagamento/:tipo/:id', component: ConsultaPagamentosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
