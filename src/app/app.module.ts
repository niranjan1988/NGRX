import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateRecordComponent } from './records/create-record/create-record.component';
import { RecordListComponent } from './records/record-list/record-list.component';
import { BaseRecordComponent } from './records/base-record/base-record.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { addRecordReducer } from './records/store/records.reducer';

const routes: Routes = [{
  path: '', redirectTo: 'records', pathMatch:'full'
},
{
  path: 'records', component: BaseRecordComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    CreateRecordComponent,
    RecordListComponent,
    BaseRecordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    StoreModule.forRoot({
      records : addRecordReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
