import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlBlogComponent } from './atl-blog.component';

describe('AtlBlogComponent', () => {
  let component: AtlBlogComponent;
  let fixture: ComponentFixture<AtlBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtlBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtlBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
