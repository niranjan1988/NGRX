import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-record-list',
  templateUrl: './new-record-list.component.html',
  styleUrls: ['./new-record-list.component.css']
})
export class NewRecordListComponent implements OnInit {
  record: Observable<string>;

  constructor(public store:Store<{newRecords:string}>) { }

  ngOnInit(): void {
    // this.recordService.recordsSubject.subscribe(res => {
    //   this.record = res;
    // });

    this.record = this.store.select('newRecords');
  }
}
