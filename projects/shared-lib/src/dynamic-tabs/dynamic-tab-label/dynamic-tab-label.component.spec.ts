import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabLabelComponent } from './dynamic-tab-label.component';

describe('DynamicTabLabelComponent', () => {
  let component: DynamicTabLabelComponent;
  let fixture: ComponentFixture<DynamicTabLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTabLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicTabLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
