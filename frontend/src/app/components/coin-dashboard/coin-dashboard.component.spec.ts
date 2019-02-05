import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinDashboardComponent } from './coin-dashboard.component';

describe('CoinDashboardComponent', () => {
  let component: CoinDashboardComponent;
  let fixture: ComponentFixture<CoinDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoinDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
