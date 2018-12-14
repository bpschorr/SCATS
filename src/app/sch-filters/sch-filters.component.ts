import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Criteria } from '../data-types/criteria';
import { DataService } from '../services/data-service';


@Component({
  selector: 'app-sch-filters',
  templateUrl: './sch-filters.component.html',
  styleUrls: ['./sch-filters.component.scss']
})
export class SchFiltersComponent implements OnInit, OnChanges {

  public selectedFilterSection: string;
  public inputText: string;
  public filterValues: any;
  public criteriaList: Criteria [];

  @Input() public tableFields;
  @Output() private emitFilterEvent = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.inputText = '';
    this.filterValues = {};
    this.criteriaList = [];
    this.dataService.currentFilterToAdd.subscribe(filter => {
      this.inputText = filter.value;
      this.updateFilters(filter.field);
      this.applyFilters();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tableFields.currentValue !== changes.tableFields.previousValue) {
      this.tableFields = changes.tableFields.currentValue;
      this.selectedFilterSection = this.tableFields[0];
    }
  }

  showInput(name) {
    this.selectedFilterSection = name;
    this.inputText = this.filterValues[name] !== '' ? this.filterValues[name] : '';
  }

  updateFilters(name) {
    if (this.inputText) {
      this.filterValues[name] = this.inputText;
    } else {
      this.removeFilter(name);
    }
  }

  removeFilter(name) {
    this.clearFilter(name);
    this.applyFilters();
  }

  clearFilter(name) {
    if (this.filterValues && this.filterValues[name]) {
      delete this.filterValues[name];
      this.inputText = '';
    }
  }

  setCriteriaList(field) {
    if (!this.filterValues || !this.filterValues[field]) {
      return false;
    }
    const criteriaOBj: Criteria = {};
    criteriaOBj.field = field;
    criteriaOBj.value = this.filterValues[field];
    this.criteriaList.push(criteriaOBj);
  }

  applyFilters() {
    this.criteriaList = [];
    this.tableFields.forEach(field => {
      this.setCriteriaList(field);
    });
    if (!this.criteriaList.length) {
      this.emitFilters();
    }
  }

  emitFilters() {
    this.emitFilterEvent.emit(this.criteriaList);
  }

}
