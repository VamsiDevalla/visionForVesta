import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNetworkComponent } from './account-network.component';

describe('AccountNetworkComponent', () => {
  let component: AccountNetworkComponent;
  let fixture: ComponentFixture<AccountNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
