import { Component, OnInit } from '@angular/core';
import { TipComponent } from '../../../../../shared-lib/src/tip/tip.component';
import { HowConfigureDomainsComponent } from '../../../../../shared-lib/src/how-configure-domains/how-configure-domains.component';

@Component({
  selector: 'dinamize-nx-workspace-spf-cname',
  standalone: true,
  imports: [
    TipComponent,
    HowConfigureDomainsComponent
  ],
  templateUrl: './spf-cname.component.html',
  styleUrls: ['./spf-cname.component.scss']
})
export class SpfCnameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
