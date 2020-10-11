import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { Brand } from '../models/brand.model';


//#region Load Brands
export const loadBrands = createAction(
  '[Brand List Components] Load Brands'
);
export const loadBrandsSuccess = createAction(
  '[Brand List Effect] Load Brands Success',
  props<{ brands: Brand[] }>()
);
export const loadBrandsFailure = createAction(
  '[Brand List Effect] Load Brands Failure',
  props<{ error: any }>()
);
//#endregion

//#region Load Brand
export const loadBrand = createAction(
  '[Brand List Component] Load Brand',
  props<{ ID: string }>()
);
export const loadBrandSuccess = createAction(
  '[Brand Effect] Load Brand Success',
  props<{ selectedBrand: Brand }>()
);
export const loadBrandFailure = createAction(
  '[Brand Effect] Load Brand Failure',
  props<{ error: any }>()
);
//#endregion

// #region Add Brand
export const addBrand = createAction(
  '[Brand Add Component] Add Brand',
  props<{ brand: Brand }>()
);

export const addBrandSuccess = createAction(
  '[Brand Add Effect] Add Brand Success',
  props<{ brand: Brand }>()
);

export const addBrandFailure = createAction(
  '[Brand Add Effect] Add Brand Failure',
  props<{ error: any }>()
);
// #endregion

//#region Edit Brand
export const updateBrand = createAction(
  '[Brand Edit Component] Update Brand',
  props<{ brand: Update<Brand> }>()
);
//#endregion

//#region Delete Brand
export const deleteBrand = createAction(
  '[Brand List Component] Delete Brand',
  props<{ id: string }>()
);

export const deleteBrandSuccess = createAction(
  '[Brand Delete Effect] Delete Brand Success',
  props<{ id: string }>()
);

export const deleteBrandFailure = createAction(
  '[Brand Delete Effect] Delete Brand Failure',
  props<{ error: any }>()
);
//#endregion
