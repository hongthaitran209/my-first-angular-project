import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from '../baitap4/baitap4.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ItemSanPhamComponent } from './item-san-pham/item-san-pham.component';
import { ListSmartPhoneComponent } from './list-smart-phone/list-smart-phone.component';
import { ListLaptopComponent } from './list-laptop/list-laptop.component';
import { ItemLaptopComponent } from './item-laptop/item-laptop.component';
import { PromotionComponent } from './promotion/promotion.component';

@NgModule({
  declarations: [Baitap4Component, HeaderComponentComponent, CarouselComponent, ItemSanPhamComponent, ListSmartPhoneComponent, ListLaptopComponent, ItemLaptopComponent, PromotionComponent],
  exports: [Baitap4Component],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
