import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvtarComponent } from './avtar.component';

describe('AvtarComponent', () => {
  let component: AvtarComponent;
  let fixture: ComponentFixture<AvtarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvtarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvtarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
