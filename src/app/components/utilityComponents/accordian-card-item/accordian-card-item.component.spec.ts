import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianCardItemComponent } from './accordian-card-item.component';

describe('AccordianCardItemComponent', () => {
  let component: AccordianCardItemComponent;
  let fixture: ComponentFixture<AccordianCardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordianCardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordianCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
