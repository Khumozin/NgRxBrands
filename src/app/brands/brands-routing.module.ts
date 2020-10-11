import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { BrandEditComponent } from './components/brand-edit/brand-edit.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
    { path: 'list', component: BrandListComponent },
    { path: 'add', component: BrandAddComponent },
    { path: 'edit/:id', component: BrandEditComponent },
    { path: '', component: BrandComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BrandsRoutingModule { }