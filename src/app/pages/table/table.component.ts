import { Component, OnInit } from '@angular/core';
import { myDataService } from '../../shared/services/myData.service';
import { sortBy } from 'sort-by-typescript';

/** Data Interface */
export interface IResults {
  index: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  title = 'mySortApp';
  myTestData$: any;
  displayRawObj: string;
  count: number;
  dataForDisplay: IResults[];
  sortAllButtonName: string;
  arrow: string;
  isActive: boolean;
  isActiveButton: boolean[] = [];

  searchText: string;

  /**
   *
   * @param myDataService
   */
  constructor(private myDataService: myDataService) {
    this.displayRawObj = '';
    this.count = 0;
    this.dataForDisplay = [];
    this.sortAllButtonName = 'Ascending';
    this.arrow = 'fa-angle-up';
    this.isActive = false;
    this.searchText = '';
  }

  /**
   * ngOninit
   */
  ngOnInit(): void {
    this.myTestData$ = this.myDataService.getSpecificURL('features').subscribe((data) => {
      // display raw object
      this.displayRawObj = data;
      this.count = data.count;
      this.dataForDisplay = data.results;
    });
  }

  /**
   * Angualr on destory
   */
  ngOnDestroy(): void {
    this.myTestData$.unsubscribe();
  }

  /**
   * Sort all columns Descending/ Ascending
   */
  sortAllColumns() {
    this.dataForDisplay.slice();
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.arrow = 'fa-angle-down';
      this.sortAllButtonName = ' Descending';
    } else {
      this.arrow = 'fa-angle-up';
      this.sortAllButtonName = 'Ascending';
    }
    this.dataForDisplay.sort().reverse();
  }
  /** sort index ascc / descc */
  sortIndex($value?: boolean) {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.dataForDisplay.sort(sortBy('-index'));
    } else {
      this.dataForDisplay.sort(sortBy('index'));
    }
  }
  /** sort index ascc / descc */
  sortName($value?: boolean) {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.dataForDisplay.sort(sortBy('-name'));
    } else {
      this.dataForDisplay.sort(sortBy('name'));
    }
  }
  /** sort index ascc / descc */
  sortURL($value?: boolean) {
    this.isActive = !this.isActive;
    if (this.isActive) {
      this.dataForDisplay.sort(sortBy('-url'));
    } else {
      this.dataForDisplay.sort(sortBy('url'));
    }
  }
}
