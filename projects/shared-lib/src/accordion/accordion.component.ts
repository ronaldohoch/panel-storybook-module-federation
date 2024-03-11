import { Component, ContentChildren, QueryList, AfterContentInit, AfterContentChecked } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, delay, map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { AccordionItemComponent } from './accordion-item/accordion-item.component';

@Component({
  selector: 'lib-accordion',
  standalone: true,
  imports: [
    CommonModule,
    AccordionItemComponent
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @ContentChildren(AccordionItemComponent) accordion!: QueryList<AccordionItemComponent>;
  accordionItems$!: Observable<AccordionItemComponent[]>;
  activeAccordion!: AccordionItemComponent;

  ngAfterContentInit(): void {
    this.accordionItems$ = this.accordion.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.accordion.toArray()));
  }

  ngAfterContentChecked() {
    if (!this.activeAccordion) {
      Promise.resolve().then(() => {
        this.activeAccordion = this.accordion.first;
      });
    }
  }

  selectTab(accordionItem: AccordionItemComponent) {
    if (this.activeAccordion === accordionItem) {
      this.activeAccordion.isActive = false;
      // this.activeAccordion = null;
    } else {
      if (this.activeAccordion) {
        this.activeAccordion.isActive = false;
      }
      accordionItem.isActive = true;
      this.activeAccordion = accordionItem;
    }
  }
}
