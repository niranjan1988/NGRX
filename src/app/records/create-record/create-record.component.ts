import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-create-record',
  templateUrl: './create-record.component.html',
  styleUrls: ['./create-record.component.css']
})
export class CreateRecordComponent implements OnInit {
  recordForm: FormGroup;
  constructor(private recordService: RecordsService) { }

  ngOnInit(): void {
    this.recordForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  AddRecord() {
      this.recordService.recordsSubject.next(this.recordForm.value.name);
  }
}
