import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSanPhamComponent } from './item-san-pham.component';

describe('ItemSanPhamComponent', () => {
  let component: ItemSanPhamComponent;
  let fixture: ComponentFixture<ItemSanPhamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSanPhamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSanPhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
