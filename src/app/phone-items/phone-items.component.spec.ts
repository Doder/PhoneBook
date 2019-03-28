import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneItemsComponent } from './phone-items.component';

describe('PhoneItemsComponent', () => {
  let component: PhoneItemsComponent;
  let fixture: ComponentFixture<PhoneItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhoneItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
