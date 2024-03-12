import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSendingApprovalComponent } from './mail-sending-approval.component';

describe('MailSendingApprovalComponent', () => {
  let component: MailSendingApprovalComponent;
  let fixture: ComponentFixture<MailSendingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailSendingApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailSendingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
