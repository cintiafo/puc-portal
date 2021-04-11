import { AppModule } from '../app.module';
import { ImovelDataService } from '../service/imovel.data.service';
import { ApiModule } from '../api/api.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CatalogoServicosComponent} from './catalogo-servicos.component';

describe('CatalogoServicosComponent', () => {
  let component: CatalogoServicosComponent;
  let fixture: ComponentFixture<CatalogoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule,
        ApiModule,
        HttpClientModule
      ],
      declarations: [ CatalogoServicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
