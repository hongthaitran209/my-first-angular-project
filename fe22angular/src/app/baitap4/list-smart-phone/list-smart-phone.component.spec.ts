import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSmartPhoneComponent } from './list-smart-phone.component';

describe('ListSmartPhoneComponent', () => {
  let component: ListSmartPhoneComponent;
  let fixture: ComponentFixture<ListSmartPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSmartPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSmartPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
