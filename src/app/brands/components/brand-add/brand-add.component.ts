import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private brandService: BrandService
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
      const brand: Brand = this.form.value;

      this.brandService.createBrand(brand)
        .subscribe(ii => {
          this.router.navigate(['brand/list']);
        }, err => {
          console.log(err);
        });
    }
  }

}
