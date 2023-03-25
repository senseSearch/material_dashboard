import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiCardComponent } from './mi-card.component';

describe('MiCardComponent', () => {
  let component: MiCardComponent;
  let fixture: ComponentFixture<MiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
