import { Component, Input, ContentChild } from '@angular/core';

import { AccordionBodyComponent } from '../accordion-body/accordion-body.component';
import { AccordionLabelComponent } from '../accordion-label/accordion-label.component';

@Component({
  selector: 'lib-accordion-item',
  standalone: true,
  imports: [AccordionBodyComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css'
})
export class AccordionItemComponent {
  @Input() label!: string;
  @Input() isActive!: boolean;

  @ContentChild(AccordionBodyComponent) bodyComponent!: AccordionBodyComponent;
  @ContentChild(AccordionLabelComponent) labelComponent!: AccordionLabelComponent;
}
