import { Component, OnInit } from '@angular/core';
import { TipComponent } from '../../../../../shared-lib/src/tip/tip.component';

@Component({
  selector: 'dinamize-emkt-config-forms-listing',
  standalone: true,
  imports: [
    TipComponent
  ],
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
