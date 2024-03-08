import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'mfe1-page1',
  standalone: true,
  imports: [
    MatButtonModule,MatCardModule
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {

}
