import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabItemComponent } from './dynamic-tab-item.component';

describe('DynamicTabItemComponent', () => {
  let component: DynamicTabItemComponent;
  let fixture: ComponentFixture<DynamicTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTabItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
