import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCamerasComponent } from './account-cameras.component';

describe('AccountCamerasComponent', () => {
  let component: AccountCamerasComponent;
  let fixture: ComponentFixture<AccountCamerasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCamerasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCamerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
