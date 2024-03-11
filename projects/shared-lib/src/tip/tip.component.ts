import { Component, Input, Output, EventEmitter } from '@angular/core';
import { fadeInAnimation } from '../_animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-tip',
  standalone: true,
  imports: [CommonModule],
  animations: [fadeInAnimation({ duration: 300 })],
  templateUrl: './tip.component.html',
  styleUrl: './tip.component.scss'
})
export class TipComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() linkDownload!: string;
  @Input() showTip!: boolean;
  @Output() closeTip: EventEmitter<any> = new EventEmitter();
  close() {
    this.closeTip.emit(null);
  }
}
