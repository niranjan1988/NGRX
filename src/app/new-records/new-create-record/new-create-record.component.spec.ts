import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCreateRecordComponent } from './new-create-record.component';

describe('NewCreateRecordComponent', () => {
  let component: NewCreateRecordComponent;
  let fixture: ComponentFixture<NewCreateRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCreateRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCreateRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
