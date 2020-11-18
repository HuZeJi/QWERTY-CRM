import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasDetailsComponent } from './ventas-details.component';

describe('VentasDetailsComponent', () => {
  let component: VentasDetailsComponent;
  let fixture: ComponentFixture<VentasDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentasDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
