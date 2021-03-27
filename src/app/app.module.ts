import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaImoveisComponent } from './consulta-imoveis/consulta-imoveis.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ListaIptuComponent } from './lista-iptu/lista-iptu.component';
import { ListaItrComponent } from './lista-itr/lista-itr.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaImoveisComponent,
    ListaImoveisComponent,
    ListaIptuComponent,
    ListaItrComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
