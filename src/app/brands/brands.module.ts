import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [
    BrandComponent,
    BrandAddComponent,
    BrandEditComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    BrandComponent,
    BrandAddComponent,
    BrandEditComponent,
    BrandListComponent
  ]
})
export class BrandsModule { }
