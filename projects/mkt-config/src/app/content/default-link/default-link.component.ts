import { Component, OnInit } from '@angular/core';
import { TipComponent } from '@dinamize/ui';

@Component({
  selector: 'dinamize-emkt-content-default-link',
  standalone: true,
  imports: [
    TipComponent
  ],
  templateUrl: './default-link.component.html',
  styleUrls: ['./default-link.component.scss']
})
export class DefaultLinkComponent implements OnInit {
  showTip:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  closeTip(){
    this.showTip=false;
  }

}
