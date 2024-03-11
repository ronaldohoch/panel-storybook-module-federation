import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowConfigureDomainsComponent } from './how-configure-domains.component';

describe('HowConfigureDomainsComponent', () => {
  let component: HowConfigureDomainsComponent;
  let fixture: ComponentFixture<HowConfigureDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowConfigureDomainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HowConfigureDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
