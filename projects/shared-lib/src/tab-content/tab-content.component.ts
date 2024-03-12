import { Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { Observable, delay, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';

import { TabContentItemComponent } from './tab-content-item/tab-content-item.component';

@Component({
  selector: 'lib-tab-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-content.component.html',
  styleUrl: './tab-content.component.scss'
})
export class TabContentComponent {
  @ContentChildren(TabContentItemComponent) tabs!: QueryList<TabContentItemComponent>;
  tabItems$!: Observable<TabContentItemComponent[]>;
  activeTab!: TabContentItemComponent;
  @Output() selectedTabEvent = new EventEmitter<any>();
  ngAfterContentInit(): void {
    this.tabItems$ = this.tabs.changes
      .pipe(startWith(""))
      .pipe(delay(0))
      .pipe(map(() => this.tabs.toArray()));
  }

  ngAfterContentChecked() {
    if (!this.activeTab) {
      Promise.resolve().then(() => {
        this.activeTab = this.tabs.first;
      })
    }
  }

  selectTab(tabItem: TabContentItemComponent) {
    if (this.activeTab === tabItem) { return; }
    if (this.activeTab) { this.activeTab.isActive = false; }
    this.activeTab = tabItem;
    tabItem.isActive = true;
    this.selectedTabEvent.emit(tabItem);
  }
}
