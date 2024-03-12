import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTextsComponent } from './default-texts.component';

describe('DefaultTextsComponent', () => {
  let component: DefaultTextsComponent;
  let fixture: ComponentFixture<DefaultTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTextsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
