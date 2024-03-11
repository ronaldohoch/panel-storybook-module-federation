import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";

@Component({
  selector: 'lib-accordion-label',
  standalone: true,
  imports: [],
  templateUrl: './accordion-label.component.html',
  styleUrl: './accordion-label.component.css'
})
export class AccordionLabelComponent {
  @ViewChild(TemplateRef) labelContent!: TemplateRef<any>;
}
