import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabContentBodyComponent } from './tab-content-body.component';

describe('TabContentBodyComponent', () => {
  let component: TabContentBodyComponent;
  let fixture: ComponentFixture<TabContentBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabContentBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabContentBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
