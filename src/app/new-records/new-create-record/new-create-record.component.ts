import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddNewRecord } from '../store/new-records.actions';

@Component({
  selector: 'app-new-create-record',
  templateUrl: './new-create-record.component.html',
  styleUrls: ['./new-create-record.component.css']
})
export class NewCreateRecordComponent implements OnInit {

  recordForm: FormGroup;
  constructor(private store : Store<string>) { }

  ngOnInit(): void {
    this.recordForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  AddRecord() {
    this.store.dispatch(new AddNewRecord(this.recordForm.value.name));
  }

}
