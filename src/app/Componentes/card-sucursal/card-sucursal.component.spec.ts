import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSucursalComponent } from './card-sucursal.component';

describe('CardSucursalComponent', () => {
  let component: CardSucursalComponent;
  let fixture: ComponentFixture<CardSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSucursalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
