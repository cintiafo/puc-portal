import { ServicoControllerService } from './../api/api/servicoController.service';
import { OrgaoMunicipalControllerService } from './../api/api/orgaoMunicipalController.service';
import { OrgaoMunicipalDTO } from './../api/model/orgaoMunicipalDTO';
import { Component, OnInit } from '@angular/core';
import { ServicoDTO } from '../api/model/servicoDTO';

@Component({
  selector: 'app-catalogo-servicos',
  templateUrl: './catalogo-servicos.component.html',
  styleUrls: ['./catalogo-servicos.component.css']
})
export class CatalogoServicosComponent implements OnInit {

  orgaos: Array<OrgaoMunicipalDTO> = [];
  orgaoSelecionado: any = {};
  servicos: Array<ServicoDTO> = [];


  constructor(private orgaoService: OrgaoMunicipalControllerService,
              private servicoService: ServicoControllerService) { }

  ngOnInit(): void {
    this.buildListaOrgaos();
  }

  buildListaOrgaos(){
    this.orgaoService.getAllUsingGET().subscribe(list =>{
      if (list && list.length > 0) {
        this.orgaos = list;
      }
    });
  }

  onSubmit() { 
    this.servicoService.listarPorOrgaoUsingGET(this.orgaoSelecionado).subscribe(list =>{
      if (list && list.length > 0) {
        this.servicos = list;
      }
    });
  }

}
