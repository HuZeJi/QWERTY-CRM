import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEditUsersComponent } from './data-edit-users.component';

describe('DataEditUsersComponent', () => {
  let component: DataEditUsersComponent;
  let fixture: ComponentFixture<DataEditUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEditUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEditUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
