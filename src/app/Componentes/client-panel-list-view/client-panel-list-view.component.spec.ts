import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPanelListViewComponent } from './client-panel-list-view.component';

describe('ClientPanelListViewComponent', () => {
  let component: ClientPanelListViewComponent;
  let fixture: ComponentFixture<ClientPanelListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientPanelListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientPanelListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
