import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlSkillsComponent } from './atl-skills.component';

describe('AtlSkillsComponent', () => {
  let component: AtlSkillsComponent;
  let fixture: ComponentFixture<AtlSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
