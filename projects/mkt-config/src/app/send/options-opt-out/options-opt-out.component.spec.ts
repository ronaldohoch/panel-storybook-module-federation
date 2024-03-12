import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsOptOutComponent } from './options-opt-out.component';

describe('OptionsOptOutComponent', () => {
  let component: OptionsOptOutComponent;
  let fixture: ComponentFixture<OptionsOptOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsOptOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsOptOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
