import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlDashboardComponent } from './atl-dashboard.component';

describe('AtlDashboardComponent', () => {
  let component: AtlDashboardComponent;
  let fixture: ComponentFixture<AtlDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
