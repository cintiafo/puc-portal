import { PagamentoControllerService } from './../api/api/pagamentoController.service';
import { PagamentoDTO } from './../api/model/pagamentoDTO';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-pagamentos',
  templateUrl: './consulta-pagamentos.component.html',
  styleUrls: ['./consulta-pagamentos.component.css']
})
export class ConsultaPagamentosComponent implements OnInit {

  tipoPagamento: string | null = '';
  listaPagamentos: PagamentoDTO[] = [];

  constructor( private route: ActivatedRoute,
                private service: PagamentoControllerService) { 
  }

  ngOnInit(): void {
    this.tipoPagamento = this.route.snapshot.paramMap.get('tipo');
 
    this.service.listarPorImovelUsingGET(Number((this.route.snapshot.paramMap.get('id'))))
        .subscribe(list => this.listaPagamentos = list);
  }

}
