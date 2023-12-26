import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonyComponent } from './ceremony.component';

describe('CeremonyComponent', () => {
  let component: CeremonyComponent;
  let fixture: ComponentFixture<CeremonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeremonyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
