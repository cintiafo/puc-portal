import { ApiModule } from './../api/api.module';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPagamentosComponent } from './consulta-pagamentos.component';
import { HttpClientModule } from '@angular/common/http';

describe('ConsultaPagamentosComponent', () => {
  let component: ConsultaPagamentosComponent;
  let fixture: ComponentFixture<ConsultaPagamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ApiModule, 
        HttpClientModule
      ],
      declarations: [ ConsultaPagamentosComponent ],
     
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
