import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-accordion-body',
  standalone: true,
  imports: [],
  templateUrl: './accordion-body.component.html',
  styleUrl: './accordion-body.component.css'
})
export class AccordionBodyComponent {
  @ViewChild(TemplateRef) bodyContent!: TemplateRef<any>;
}
