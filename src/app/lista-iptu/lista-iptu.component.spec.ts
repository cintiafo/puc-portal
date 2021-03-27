import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIptuComponent } from './lista-iptu.component';

describe('ListaIptuComponent', () => {
  let component: ListaIptuComponent;
  let fixture: ComponentFixture<ListaIptuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaIptuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaIptuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
