import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { BaseRecordComponent } from './records/base-record/base-record.component';
import { CreateRecordComponent } from './records/create-record/create-record.component';
import { RecordListComponent } from './records/record-list/record-list.component';
import { addRecordReducer } from './records/store/records.reducer';

const routes: Routes = [
  { path: '', redirectTo: 'records', pathMatch: 'full' },
  { path: 'records', component: BaseRecordComponent },
  { path: 'newrecords', loadChildren: () => import('./new-records/new-records.module').then(m => m.NewRecordsModule) }
];

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
      records: addRecordReducer
    }),
    !environment.production? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
