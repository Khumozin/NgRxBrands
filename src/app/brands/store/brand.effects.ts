import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, mergeMap, tap } from 'rxjs/operators';

import { BrandService } from '../services/brand.service';
import * as fromBrandActions from './brand.actions';

@Injectable()
export class BrandEffects {

  createBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBrandActions.addBrand),
      mergeMap(action => this.brandService.createBrand(action.brand)
        .pipe(
          map(brand => fromBrandActions.addBrandSuccess({ brand })),
          catchError(error => of(fromBrandActions.addBrandFailure({ error })))
        )
      ),
      tap(() => this.router.navigate(['brand/list']))
    )
  );

  loadBrands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBrandActions.loadBrands),
      mergeMap(action => this.brandService.getBrands()
        .pipe(
          map(brands => fromBrandActions.loadBrandsSuccess({ brands })),
          catchError(error => of(fromBrandActions.loadBrandsFailure({ error })))
        )
      )
    )
  );

  loadBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBrandActions.loadBrand),
      mergeMap(action => this.brandService.getBrandByID(action.ID)
        .pipe(
          map(brand => fromBrandActions.loadBrandSuccess({ selectedBrand: brand })),
          catchError(error => of(fromBrandActions.loadBrandFailure({ error })))
        )
      )
    )
  );

  updateBrand$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromBrandActions.updateBrand),
        concatMap(action => this.brandService
          .updateBrand(
            action.brand.id,
            action.brand.changes
          )
        ),
        tap(() => this.router.navigate(['brand/list']))
      ),
    { dispatch: false }
  );

  deleteBrand$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromBrandActions.deleteBrand),
      mergeMap(action =>
        this.brandService.deleteBrand(action.id)
          .pipe(
            map(() => fromBrandActions.deleteBrandSuccess({ id: action.id })),
            catchError(error => of(fromBrandActions.deleteBrandFailure({ error })))
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private brandService: BrandService) { }

}
