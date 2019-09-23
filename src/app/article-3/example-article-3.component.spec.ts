import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleArticle3Component } from './example-article-3.component';

describe('ExampleArticle3Component', () => {
  let component: ExampleArticle3Component;
  let fixture: ComponentFixture<ExampleArticle3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleArticle3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleArticle3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
