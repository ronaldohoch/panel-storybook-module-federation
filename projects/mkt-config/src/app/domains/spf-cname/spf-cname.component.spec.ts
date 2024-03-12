import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpfCnameComponent } from './spf-cname.component';

describe('SpfCnameComponent', () => {
  let component: SpfCnameComponent;
  let fixture: ComponentFixture<SpfCnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpfCnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpfCnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
