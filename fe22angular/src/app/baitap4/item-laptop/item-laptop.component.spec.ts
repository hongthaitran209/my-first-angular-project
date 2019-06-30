import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLaptopComponent } from './item-laptop.component';

describe('ItemLaptopComponent', () => {
  let component: ItemLaptopComponent;
  let fixture: ComponentFixture<ItemLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
