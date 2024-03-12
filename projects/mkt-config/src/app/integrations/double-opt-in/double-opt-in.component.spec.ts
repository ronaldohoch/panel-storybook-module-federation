import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOUBLEOPTINComponent } from './double-opt-in.component';

describe('DOUBLEOPTINComponent', () => {
  let component: DOUBLEOPTINComponent;
  let fixture: ComponentFixture<DOUBLEOPTINComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOUBLEOPTINComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOUBLEOPTINComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
