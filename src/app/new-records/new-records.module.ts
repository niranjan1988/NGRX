import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { NewBaseRecordComponent } from './new-base-record/new-base-record.component';
import { NewCreateRecordComponent } from './new-create-record/new-create-record.component';
import { NewRecordListComponent } from './new-record-list/new-record-list.component';
import { addNewRecordReducer } from './store/new-records.reducer';

const routes: Routes = [{
    path: '', component: NewBaseRecordComponent
  }];
  
  @NgModule({
    declarations: [     
      NewBaseRecordComponent,
      NewRecordListComponent,
      NewCreateRecordComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      ReactiveFormsModule,
      StoreModule.forFeature('newRecords' , addNewRecordReducer)      
    ],
    providers: []
  })
  export class NewRecordsModule { }