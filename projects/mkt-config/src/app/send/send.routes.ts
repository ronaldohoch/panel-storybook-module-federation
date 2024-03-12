import { Routes } from '@angular/router';

export const sendRoutes: Routes = [
  {
    path:'',
    loadComponent: () => import('./send/send.component').then(c => c.SendComponent),
    pathMatch:'full'
  },
  {
    path:'social-medias',
    loadComponent: () => import('./social-medias/social-medias.component').then(c => c.SocialMediasComponent),
  },
  {
    path:'optOut',
    loadComponent: () => import('./options-opt-out/options-opt-out.component').then(c => c.OptionsOptOutComponent),
  },
  {
    path:'mail-send-approval',
    loadComponent: () => import('./mail-sending-approval/mail-sending-approval.component').then(c => c.MailSendingApprovalComponent),
  },
  {
    path:'test-list',
    loadComponent: () => import('./list-test/list-test.component').then(c => c.ListTestComponent),
  },
  {
    path:'default-email',
    loadComponent: () => import('./default-email/default-email.component').then(c => c.DefaultEmailComponent),
  },
];
