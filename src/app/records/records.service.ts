import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  public recordsSubject = new Subject<string>();

  constructor() { }
}
