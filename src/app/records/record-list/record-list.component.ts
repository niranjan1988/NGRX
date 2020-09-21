import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-record-list',
  templateUrl: './record-list.component.html',
  styleUrls: ['./record-list.component.css']
})
export class RecordListComponent implements OnInit {
  record: Observable<string>;

  constructor(public store: Store<{records:string}>) { }

  ngOnInit(): void {
    // this.recordService.recordsSubject.subscribe(res => {
    //   this.record = res;
    // });

    this.record = this.store.select('records');
  }
}
