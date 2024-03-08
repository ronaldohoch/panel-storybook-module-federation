import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'shell-root',
  standalone: true,
  imports: [
    RouterOutlet, RouterModule,
    MatIconModule, MatButtonModule, MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shell';
}
