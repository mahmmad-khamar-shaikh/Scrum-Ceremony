import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitedDashboardComponent } from './limited-dashboard.component';

describe('LimitedDashboardComponent', () => {
  let component: LimitedDashboardComponent;
  let fixture: ComponentFixture<LimitedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimitedDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
