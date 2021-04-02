import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPagamentosComponent } from './consulta-pagamentos.component';

describe('ListaItrComponent', () => {
  let component: ConsultaPagamentosComponent;
  let fixture: ComponentFixture<ConsultaPagamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaPagamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
