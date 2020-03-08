import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRegionPanelComponent } from './customer-region-panel.component';

describe('CustomerRegionPanelComponent', () => {
  let component: CustomerRegionPanelComponent;
  let fixture: ComponentFixture<CustomerRegionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
