import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-consulta-imoveis',
  templateUrl: './consulta-imoveis.component.html',
  styleUrls: ['./consulta-imoveis.component.css']
})
export class ConsultaImoveisComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['/lista-imoveis']);
  }

}
