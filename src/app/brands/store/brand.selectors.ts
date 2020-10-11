import { createFeatureSelector, createSelector } from '@ngrx/store';

import { brandsFeatureKey, BrandState, selectAll } from './brand.reducer';

export const selectBrandState = createFeatureSelector<BrandState>(brandsFeatureKey);

export const selectBrands = createSelector(selectBrandState, selectAll);

export const selectedBrand = createSelector(selectBrandState, (state: BrandState) => state.selectedBrand);