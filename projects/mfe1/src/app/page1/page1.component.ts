import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AuthService } from '@dinamize/ui';

@Component({
  selector: 'mfe1-page1',
  standalone: true,
  imports: [
    MatButtonModule, MatCardModule
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  user:any;
  constructor(private authSvc: AuthService) {
    this.authSvc.user$.subscribe(data=>{
      this.user = data;
      console.log('user',this.user)
    })
    this.authSvc.userInfo().subscribe()
  }
}
