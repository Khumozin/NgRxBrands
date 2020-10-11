import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { BrandService } from '../../services/brand.service';
import { addBrand } from '../../store/brand.actions';
import { BrandState } from '../../store/brand.reducer';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private brandService: BrandService,
    private store: Store<BrandState>
  ) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm() {
    this.form = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Description': new FormControl(null, Validators.required)
    });
  }

  onAdd() {
    if (this.form.valid) {
      this.store.dispatch(addBrand({ brand: this.form.value }))
    }
  }

}
