import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinamize-nx-workspace-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeTabEvent(event:any){}
}
