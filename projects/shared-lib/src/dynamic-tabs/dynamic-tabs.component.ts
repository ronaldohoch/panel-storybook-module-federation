import { Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';

import { DynamicTabItemComponent } from './dynamic-tab-item/dynamic-tab-item.component';
import { Observable, delay, map, startWith } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'lib-dynamic-tabs',
  standalone: true,
  imports: [BrowserModule],
  templateUrl: './dynamic-tabs.component.html',
  styleUrl: './dynamic-tabs.component.scss'
})
export class DynamicTabsComponent {
  @ContentChildren(DynamicTabItemComponent) tabs!: QueryList<DynamicTabItemComponent>;
  tabItems$!: Observable<DynamicTabItemComponent[]>;
  activeTab!: DynamicTabItemComponent;
  @Output() selectedTabEvent = new EventEmitter<any>();
  ngAfterContentInit(): void{
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(()=>this.tabs.toArray()));
  }

  ngAfterContentChecked(){
    if(!this.activeTab){
      Promise.resolve().then(()=>{
        this.activeTab = this.tabs.first;
      })
    }
  }

  selectTab(tabItem:DynamicTabItemComponent){
    if(this.activeTab===tabItem){return;}
    if(this.activeTab){this.activeTab.isActive = false;}
    this.activeTab = tabItem;
    tabItem.isActive = true;
    this.selectedTabEvent.emit(tabItem);
  }
}
