import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleArticle2Component } from './example-article-2.component';

describe('ExampleArticle2Component', () => {
  let component: ExampleArticle2Component;
  let fixture: ComponentFixture<ExampleArticle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleArticle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleArticle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
