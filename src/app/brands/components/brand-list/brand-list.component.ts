import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Description', 'DateCreated', 'DateUpdated'];
  dataSource: Brand[] = [];
  isLoading: boolean = false;

  constructor(
    private brandService: BrandService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe(ii => {
      this.dataSource = [...ii];
      this.isLoading = false;
    });
  }

  onEdit(id: string) {
    this.router.navigate(['brand/edit', id]);
  }

}
