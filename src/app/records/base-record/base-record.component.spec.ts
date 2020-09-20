import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseRecordComponent } from './base-record.component';

describe('BaseRecordComponent', () => {
  let component: BaseRecordComponent;
  let fixture: ComponentFixture<BaseRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
