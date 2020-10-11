import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandComponent } from './components/brand/brand.component';
import { StoreModule } from '@ngrx/store';
import * as fromBrand from './store/brand.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BrandEffects } from './store/brand.effects';

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
    MatProgressSpinnerModule,
    MatMenuModule,
    MatSnackBarModule,
    StoreModule.forFeature(fromBrand.brandsFeatureKey, fromBrand.reducer),
    EffectsModule.forFeature([BrandEffects])
  ],
  exports: [
    BrandComponent,
    BrandAddComponent,
    BrandEditComponent,
    BrandListComponent
  ]
})
export class BrandsModule { }
