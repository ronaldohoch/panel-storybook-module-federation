import { Component } from '@angular/core';

@Component({
  selector: 'lib-how-configure-domains',
  standalone: true,
  imports: [],
  templateUrl: './how-configure-domains.component.html',
  styleUrl: './how-configure-domains.component.scss'
})
export class HowConfigureDomainsComponent {
  openDomainModal(){
    if ( window.location !== window.parent.location ) {
      //Dentro do iframe
      window.parent.postMessage("AbreModal","*");
    } else {
      // Fora do iframe

    }
  }
}
