import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';
import { deleteBrand, loadBrand, loadBrands } from '../../store/brand.actions';
import { BrandState } from '../../store/brand.reducer';
import { selectBrands } from '../../store/brand.selectors';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  @ViewChild(MatTable) table: MatTable<any>;

  displayedColumns: string[] = ['Name', 'Description', 'DateCreated', 'DateUpdated'];
  dataSource$: Observable<Brand[]>;
  isLoading: boolean = false;
  selectedItem: string;

  constructor(
    private brandService: BrandService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store<BrandState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadBrands());
    this.isLoading = true;
    this.loadBrands();
  }

  loadBrands() {
    this.dataSource$ = this.store.pipe(select(selectBrands))
  }

  onView() {
    this.router.navigate(['brand/get', this.selectedItem]);
  }

  onEdit() {
    this.router.navigate(['brand/edit', this.selectedItem]);
  }

  onDelete() {
    this.store.dispatch(deleteBrand({ id: this.selectedItem }));
    this.showSnackBar('Successfully deleted!');
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 5000 });
  }

  onSelectItem(id: string) {
    this.selectedItem = id;
    this.store.dispatch(loadBrand({ ID: id }));
  }

}
