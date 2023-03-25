import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOficinaComponent } from './material-oficina.component';

describe('MaterialOficinaComponent', () => {
  let component: MaterialOficinaComponent;
  let fixture: ComponentFixture<MaterialOficinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOficinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialOficinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
