import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['brand/add']);
  }

  onView() {
    this.router.navigate(['brand/list']);
  }

}
