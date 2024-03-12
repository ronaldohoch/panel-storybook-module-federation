import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-tab-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tab-link.component.html',
  styleUrl: './tab-link.component.scss'
})
export class TabLinkComponent {
  @Input() Tabs=[] as Array<any>
}
