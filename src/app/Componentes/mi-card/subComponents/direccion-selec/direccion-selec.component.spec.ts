import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionSelecComponent } from './direccion-selec.component';

describe('DireccionSelecComponent', () => {
  let component: DireccionSelecComponent;
  let fixture: ComponentFixture<DireccionSelecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionSelecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionSelecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
