import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'brand',
    loadChildren: '../app/brands/brands.module#BrandsModule'
  },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
