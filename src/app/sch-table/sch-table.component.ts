import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Criteria } from '../data-types/criteria';
import { DataService } from '../services/data-service';
import { HTTPConfigurationService } from '../config/http-config-service';


@Component({
  selector: 'app-sch-table',
  templateUrl: './sch-table.component.html',
  styleUrls: ['./sch-table.component.scss']
})
export class SchTableComponent implements OnInit, AfterViewInit {

  public tableFields = [];
  public tableData = [];
  public growlMsg = [];

  constructor(private dataService: DataService, private httpConfig: HTTPConfigurationService) { }

  ngOnInit() {
    this.getTableFields();
    this.getTableData();
  }

  ngAfterViewInit() {
    document.addEventListener('selectionchange', this.debounce(() => {
      if (document.getSelection().toString() === '') {
        this.removeTooltip();
      } else {
        this.evaluateSelection();
      }
    }, 250));
  }

  debounce(func, wait) {
    let timeout;
    return function executedFunction() {
      const later = function() {
        timeout = null;
        func.apply(this);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  evaluateSelection() {
    if (document.getSelection().anchorNode.parentElement.classList[0] === 'row') {
      const tooltip = document.getElementById('addToFilter');
      const selection = document.getSelection();
      if (selection.rangeCount) {
        const range = selection.getRangeAt(0).cloneRange();
        if (range.getClientRects) {
          range.collapse(true);
          const rects = range.getClientRects();
          if (rects.length) {
            const rect = rects[0];
            const x = rect.left + 15;
            const y = rect.top + 15;
            tooltip.setAttribute('style', 'display: block; position: absolute; left: ' + x + 'px; top: ' + y + 'px');
          }
        }
      }
    }
  }

  removeTooltip() {
    document.getElementById('addToFilter').setAttribute('style', 'display: none');
  }

  addToFilter() {
    const filterToAdd = new Criteria();
    const field = document.getSelection().anchorNode.parentElement.dataset.index.toString();
    const value = document.getSelection().toString();
    filterToAdd.field = field;
    filterToAdd.value = value;
    this.dataService.updateFilterToAdd(filterToAdd);
  }

  receiveFilters(criteria) {
    // post to api
  }

  /* Sample data */
  getTableFields() {
    this.httpConfig.getData('../assets/test-data/tableFields.json')
    .subscribe(
      (data: any) => {
        this.tableFields = data;
      },
      (error) => {
        console.log(error);
      },
      function () {
        console.log('completed');
      }
    );
  }
  /* Sample data */
  getTableData() {
    this.httpConfig.getData('../assets/test-data/tableData.json')
    .subscribe(
      (data: any) => {
        this.tableData = data;
      },
      (error) => {
        console.log(error);
      },
      function () {
        console.log('completed');
      }
    );
  }

}
