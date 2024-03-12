import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dinamize-emkt-send-options-opt-out',
  standalone: true,
  templateUrl: './options-opt-out.component.html',
  styleUrls: ['./options-opt-out.component.scss']
})
export class OptionsOptOutComponent implements OnInit {
  showMotivations:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
