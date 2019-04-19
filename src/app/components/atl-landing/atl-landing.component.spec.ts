import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlLandingComponent } from './atl-landing.component';

describe('AtlLandingComponent', () => {
  let component: AtlLandingComponent;
  let fixture: ComponentFixture<AtlLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
