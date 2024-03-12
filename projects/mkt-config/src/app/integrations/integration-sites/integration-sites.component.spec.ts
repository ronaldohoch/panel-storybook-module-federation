import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationSitesComponent } from './integration-sites.component';

describe('IntegrationSitesComponent', () => {
  let component: IntegrationSitesComponent;
  let fixture: ComponentFixture<IntegrationSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationSitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
