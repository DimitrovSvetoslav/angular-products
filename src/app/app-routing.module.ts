import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { AddProductsToDbComponent } from './add-products-to-db/add-products-to-db.component';
import { ProductListComponent } from './product-list/product-list.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'add', component: AddProductsToDbComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
