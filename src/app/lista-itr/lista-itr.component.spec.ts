import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItrComponent } from './lista-itr.component';

describe('ListaItrComponent', () => {
  let component: ListaItrComponent;
  let fixture: ComponentFixture<ListaItrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
