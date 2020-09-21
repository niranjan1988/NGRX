import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBaseRecordComponent } from './new-base-record.component';

describe('NewBaseRecordComponent', () => {
  let component: NewBaseRecordComponent;
  let fixture: ComponentFixture<NewBaseRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBaseRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
