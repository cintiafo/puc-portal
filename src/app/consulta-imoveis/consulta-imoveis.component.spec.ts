import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaImoveisComponent } from './consulta-imoveis.component';

describe('ConsultaImoveisComponent', () => {
  let component: ConsultaImoveisComponent;
  let fixture: ComponentFixture<ConsultaImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaImoveisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaImoveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
