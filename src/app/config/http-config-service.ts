import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HTTPConfigurationService {

    constructor( private http: HttpClient) {}

    getData(url) {
        return this.http.get(url);
    }

}
