import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './components/brand/brand.component';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';



@NgModule({
  declarations: [BrandComponent, BrandAddComponent, BrandEditComponent, BrandListComponent],
  imports: [
    CommonModule
  ]
})
export class BrandsModule { }
