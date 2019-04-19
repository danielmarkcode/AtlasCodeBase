import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlContactComponent } from './atl-contact.component';

describe('AtlContactComponent', () => {
  let component: AtlContactComponent;
  let fixture: ComponentFixture<AtlContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
