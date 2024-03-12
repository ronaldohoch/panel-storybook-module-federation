import { Component, ContentChildren, ElementRef, Input, QueryList, ViewChild } from '@angular/core';

import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { Observable, debounceTime, delay, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @ContentChildren(DropdownItemComponent) itemComponent!: QueryList<DropdownItemComponent>;
  @ViewChild('list') list!:ElementRef;
  @Input() ButtonLabel:string="";
  @Input() ListWidth:number|string="";
  optionItems$!: Observable<DropdownItemComponent[]>;

  scrollSubscription!:any;
  scrollSubscriptionThrottling:any;
  open:boolean=false;
  position:string="botton";
  ngOnInit(): void {
    if(this.ButtonLabel==""){
      this.open=true;
    }
  }

  openDropdown(){
    this.open = !this.open;
    if(this.open){
      const observable = fromEvent(window, 'scroll');
      this.scrollSubscription = observable.pipe(
        debounceTime(50),
        distinctUntilChanged()).subscribe(() =>{
          if(this.list.nativeElement.offsetHeight+this.list.nativeElement.getBoundingClientRect().top>window.innerHeight-15){
            this.position="top";
          }
          if(this.list.nativeElement.getBoundingClientRect().top<0){
            this.position="";
          }
        });
    }else{
      this.scrollSubscription.unsubscribe();
    }
  }

  ngAfterContentInit(): void {
    this.optionItems$ = this.itemComponent.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.itemComponent.toArray()));
  }

}
