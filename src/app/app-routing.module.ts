import { HomeComponent } from './home/home.component';
import { ListaIptuComponent } from './lista-iptu/lista-iptu.component';
import { ListaItrComponent } from './lista-itr/lista-itr.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ConsultaImoveisComponent } from './consulta-imoveis/consulta-imoveis.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'consulta-imoveis', component: ConsultaImoveisComponent },
  { path: 'lista-imoveis', component: ListaImoveisComponent },
  { path: 'lista-iptu', component: ListaIptuComponent },
  { path: 'lista-itr', component: ListaItrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
