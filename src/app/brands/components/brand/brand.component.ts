import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand.service';
import { loadBrand } from '../../store/brand.actions';
import { BrandState } from '../../store/brand.reducer';
import { selectedBrand } from '../../store/brand.selectors';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  brand$: Observable<Brand>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private brandService: BrandService,
    private store: Store<BrandState>
  ) { }

  ngOnInit(): void {
    this.loadBrand();
  }

  onAdd() {
    this.router.navigate(['brand/add']);
  }

  onView() {
    this.router.navigate(['brand/list']);
  }

  loadBrand() {
    const id: string = this.route.snapshot.paramMap.get('id');
    this.store.dispatch(loadBrand({ ID: id }));

    this.brand$ = this.store.pipe(select(selectedBrand));
  }

}
