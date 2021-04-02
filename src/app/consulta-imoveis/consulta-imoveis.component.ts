import { ImovelDataService } from './../service/imovel.data.service';
import { ImovelDTO } from './../api/model/imovelDTO';
import { ImovelControllerService } from './../api/api/imovelController.service';
import { PessoaDTO } from './../api/model/pessoaDTO';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-imoveis',
  templateUrl: './consulta-imoveis.component.html',
  styleUrls: ['./consulta-imoveis.component.css']
})
export class ConsultaImoveisComponent implements OnInit {

  tiposPessoas: any = [];
  tipoPessoaSelecionado: string = '';
  identificador: string = '';


  constructor(private router: Router,
              private service: ImovelControllerService,
              private dataService: ImovelDataService) { }

  ngOnInit(): void {
    this.buildTiposPessoas();
  }

  buildTiposPessoas(){
    this.tiposPessoas = [
      {value: PessoaDTO.TipoPessoaEnum.FISICA, label: 'Fisíca'},
      {value: PessoaDTO.TipoPessoaEnum.JURIDICA, label: 'Jurídica'},
      {value: PessoaDTO.TipoPessoaEnum.RURAL, label: 'Rural'}
    ];
  }

  onSubmit() { 
    this.service.listarPorPessoaUsingGET(this.identificador, this.tipoPessoaSelecionado).subscribe(list =>{
      if (list && list.length > 0) {
        this.dataService.changList(list);
        this.router.navigate(['/lista-imoveis']);
      }
    });
  }

}
