import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentLabelComponent } from './tab-content-label.component';

describe('TabContentLabelComponent', () => {
  let component: TabContentLabelComponent;
  let fixture: ComponentFixture<TabContentLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
