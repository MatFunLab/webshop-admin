import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficPanelComponent } from './traffic-panel.component';

describe('TrafficPanelComponent', () => {
  let component: TrafficPanelComponent;
  let fixture: ComponentFixture<TrafficPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
