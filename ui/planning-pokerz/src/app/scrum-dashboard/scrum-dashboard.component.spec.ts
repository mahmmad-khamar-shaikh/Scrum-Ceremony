import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumDashboardComponent } from './scrum-dashboard.component';

describe('ScrumDashboardComponent', () => {
  let component: ScrumDashboardComponent;
  let fixture: ComponentFixture<ScrumDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
