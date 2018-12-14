import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Criteria } from '../data-types/criteria';

@Injectable()
export class DataService {
    private filterToAdd = new BehaviorSubject<Criteria>({});
    public currentFilterToAdd = this.filterToAdd.asObservable();

    constructor() { }

    updateFilterToAdd(filter) {
        this.filterToAdd.next(filter);
    }

}
