import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinamize-emkt-content-default-link',
  standalone: true,
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
