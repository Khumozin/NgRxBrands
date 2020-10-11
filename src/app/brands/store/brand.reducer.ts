import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Brand } from '../models/brand.model';
import * as BrandActions from './brand.actions';

export const brandsFeatureKey = 'brands';

export interface BrandState extends EntityState<Brand> {
  // additional entities state properties
  error: any;
  selectedBrand: Brand;
}

export const adapter: EntityAdapter<Brand> = createEntityAdapter<Brand>({
  selectId: (brand: Brand) => brand.ID, // fix => https://stackoverflow.com/a/58486875/9674861
});

export const initialState: BrandState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
  selectedBrand: undefined
});


export const reducer = createReducer(
  initialState,
  //#region Add Brand
  on(BrandActions.addBrandSuccess,
    (state, action) => adapter.addOne(action.brand, state)
  ),
  on(BrandActions.addBrandFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  //#endregion

  //#region Load Brands
  on(BrandActions.loadBrandsSuccess,
    (state, action) => adapter.setAll(action.brands, state)
  ),
  on(BrandActions.loadBrandsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  //#endregion

  //#region Load Brand
  on(BrandActions.loadBrandSuccess,
    (state, action) => {
      return {
        ...state,
        selectedBrand: action.selectedBrand
      }
    }
  ),
  on(BrandActions.loadBrandFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  //#endregion

  //#region Update Brand
  on(BrandActions.updateBrand,
    (state, action) => adapter.updateOne(action.brand, state)
  ),
  //#endregion

  //#region Delete Brand
  on(BrandActions.deleteBrandSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BrandActions.deleteBrandFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
    }
  ),
  //#endregion
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
