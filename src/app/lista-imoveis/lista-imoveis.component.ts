import { PessoaDTO } from './../api/model/pessoaDTO';
import { ImovelDTO } from './../api/model/imovelDTO';
import { ImovelDataService } from './../service/imovel.data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.component.html',
  styleUrls: ['./lista-imoveis.component.css']
})
export class ListaImoveisComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  listaImoveis: ImovelDTO[] = [];

  constructor(private dataService: ImovelDataService) {
    this.subscription = dataService.imoveis.subscribe(list => this.listaImoveis = list);
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
