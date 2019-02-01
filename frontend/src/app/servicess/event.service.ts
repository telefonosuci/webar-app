import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import {Http, Response} from "@angular/http";

import {Event} from "../shared/models/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: Http) { }

  getAll(): Observable<Response> {
    return this.http.get('/api/events');
  }

}
