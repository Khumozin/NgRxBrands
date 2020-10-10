import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-edit',
  templateUrl: './brand-edit.component.html',
  styleUrls: ['./brand-edit.component.scss']
})
export class BrandEditComponent implements OnInit {

  form: FormGroup;
  brand: Brand;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private brandService: BrandService
  ) { }

  ngOnInit(): void {
    this.getBrand();
    this.generateForm();
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
      this.brandService.updateBrand(this.brand)
        .subscribe(
          res => {
            this.router.navigate(['brand/list']);
          },
          err => {
            console.log(err);
          }
        )
    }
  }

  getBrand(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.brandService.getBrandByID(id).subscribe(ii => {
      this.brand = ii;
      this.form.controls['Name'].patchValue(ii.Name);
      this.form.controls['Description'].patchValue(ii.Description);
    });
  }

}
