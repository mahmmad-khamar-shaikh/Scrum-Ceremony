import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroDashboardComponent } from './retro-dashboard.component';

describe('RetroDashboardComponent', () => {
  let component: RetroDashboardComponent;
  let fixture: ComponentFixture<RetroDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
