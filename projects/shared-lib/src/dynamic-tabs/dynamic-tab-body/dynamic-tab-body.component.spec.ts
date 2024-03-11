import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabBodyComponent } from './dynamic-tab-body.component';

describe('DynamicTabBodyComponent', () => {
  let component: DynamicTabBodyComponent;
  let fixture: ComponentFixture<DynamicTabBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTabBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicTabBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
