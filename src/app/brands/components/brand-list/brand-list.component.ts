import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['Name', 'Description', 'DateCreated', 'DateUpdated'];
  dataSource: Brand[] = [];
  isLoading: boolean = false;
  selectedItem: string;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private snackBar: MatSnackBar
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

  onEdit() {
    this.router.navigate(['brand/edit', this.selectedItem]);
  }

  onDelete() {
    const delSub = this.brandService.deleteBrand(this.selectedItem)
      .subscribe(() => {
        this.removeItem(this.selectedItem);
        this.showSnackBar('Successfully Deleted!');
        delSub.unsubscribe();
      },
        err => {
          console.log(err);
        }
      );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 5000 });
  }

  removeItem(id: string) {
    const index = this.dataSource.findIndex(i => i.ID === id);
    this.dataSource.splice(index, 1);
    this.table.renderRows();
  }

  onSelectItem(id: string) {
    this.selectedItem = id;
  }

}
