import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCaptureComponent } from './forms-capture.component';

describe('FormsCaptureComponent', () => {
  let component: FormsCaptureComponent;
  let fixture: ComponentFixture<FormsCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
