import { CatalogoServicosComponent } from './catalogo-servicos/catalogo-servicos.component';
import { ImovelDataService } from './service/imovel.data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaImoveisComponent } from './consulta-imoveis/consulta-imoveis.component';
import { ListaImoveisComponent } from './lista-imoveis/lista-imoveis.component';
import { ConsultaPagamentosComponent } from './consulta-pagamentos/consulta-pagamentos.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ApiModule } from './api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { search } from 'ngx-bootstrap-icons';

const icons = {
  search
};

@NgModule({
  declarations: [
    AppComponent,
    ConsultaImoveisComponent,
    ListaImoveisComponent,
    ConsultaPagamentosComponent,
    CatalogoServicosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    ApiModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [ImovelDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
