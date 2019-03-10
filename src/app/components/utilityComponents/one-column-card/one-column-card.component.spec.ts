import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneColumnCardComponent } from './one-column-card.component';

describe('OneColumnCardComponent', () => {
  let component: OneColumnCardComponent;
  let fixture: ComponentFixture<OneColumnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneColumnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneColumnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
