import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecordListComponent } from './new-record-list.component';

describe('NewRecordListComponent', () => {
  let component: NewRecordListComponent;
  let fixture: ComponentFixture<NewRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecordListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
