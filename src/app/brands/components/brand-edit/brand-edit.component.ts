import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Update } from '@ngrx/entity';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Brand } from '../../models/brand.model';
import { updateBrand } from '../../store/brand.actions';
import { BrandState } from '../../store/brand.reducer';
import { selectedBrand } from '../../store/brand.selectors';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit, OnDestroy {

  form: FormGroup;
  brand: Brand;
  isLoading: boolean = true;
  brandSub: Subscription;

  constructor(
    private store: Store<BrandState>
  ) { }

  ngOnInit(): void {
    this.generateForm();
    this.getBrand();
  }

  ngOnDestroy(): void {
    if (this.brandSub) {
      this.brandSub.unsubscribe();
    }
  }

  generateForm() {
    this.form = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Description': new FormControl(null, Validators.required)
    });
  }

  onEdit() {
    if (this.form.valid) {
      const data: Brand = this.form.value;
      this.brand.Name = data.Name;
      this.brand.Description = data.Description;

      const changes: Update<Brand> = {
        id: this.brand.ID,
        changes: this.brand
      }

      this.store.dispatch(updateBrand({ brand: changes }));
    }
  }

  getBrand(): void {
    this.brandSub = this.store.pipe(select(selectedBrand))
      .subscribe(ii => {
        this.brand = Object.assign(new Brand(), ii);
        this.form.controls['Name'].patchValue(ii.Name);
        this.form.controls['Description'].patchValue(ii.Description);
      });
  }

}
