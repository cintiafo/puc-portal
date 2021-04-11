import { AppModule } from './../app.module';
import { ImovelDataService } from './../service/imovel.data.service';
import { ApiModule } from './../api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ConsultaImoveisComponent } from './consulta-imoveis.component';

describe('ConsultaImoveisComponent', () => {
  let component: ConsultaImoveisComponent;
  let fixture: ComponentFixture<ConsultaImoveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
        ApiModule,
        HttpClientModule
      ],
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
