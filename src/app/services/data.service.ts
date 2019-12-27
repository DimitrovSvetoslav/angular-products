import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  productsRef: AngularFireList<any>;
  productList: Observable<any[]>;
  products: Product[];

  constructor(db: AngularFireDatabase) {
    this.productsRef = db.list('products');
    this.productList = this.productsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.productList.subscribe(data => this.products = data)
  }

  getProductsRef() {
    return this.productsRef;
  }

  getProductList() {
    return this.productList;
  }

  saveProduct(product) {
    let uniqueID = this.products.findIndex(x => x.ProductID === product.ProductID);
    if(uniqueID !== -1) {
      alert('This ID has been used before');
    } else {
      this.productsRef.push(product);
    }
  }
  deleteProduct(key: string) {
    this.productsRef.remove(key);
  }

  updateProductQuantity(key: string, UnitsInStock: number) {
    this.productsRef.update(key, { UnitsInStock: UnitsInStock });
  }
}
