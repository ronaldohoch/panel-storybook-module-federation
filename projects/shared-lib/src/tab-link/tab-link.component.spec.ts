import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabLinkComponent } from './tab-link.component';

describe('TabLinkComponent', () => {
  let component: TabLinkComponent;
  let fixture: ComponentFixture<TabLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabLinkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
