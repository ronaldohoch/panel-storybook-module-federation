import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionLabelComponent } from './accordion-label.component';

describe('AccordionLabelComponent', () => {
  let component: AccordionLabelComponent;
  let fixture: ComponentFixture<AccordionLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccordionLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
