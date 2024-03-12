import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentItemComponent } from './tab-content-item.component';

describe('TabContentItemComponent', () => {
  let component: TabContentItemComponent;
  let fixture: ComponentFixture<TabContentItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
