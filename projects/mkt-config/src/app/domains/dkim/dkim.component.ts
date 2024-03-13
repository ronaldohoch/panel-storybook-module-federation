import { Component, OnInit } from '@angular/core';
import { HowConfigureDomainsComponent, TipComponent } from '@dinamize/ui';

@Component({
  selector: 'dinamize-nx-workspace-dkim',
  standalone: true,
  imports: [
    TipComponent,
    HowConfigureDomainsComponent
  ],
  templateUrl: './dkim.component.html',
  styleUrls: ['./dkim.component.scss']
})
export class DkimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
