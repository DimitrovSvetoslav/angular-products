import { Injectable } from '@angular/core';
//import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireDatabase} from '@angular/fire/database'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  productsRef;

  constructor(db: AngularFireDatabase) {
    this.productsRef = db.list('products');
  }

  getProducts() {
    return this.productsRef;
  }

  saveProduct(product) {
    this.productsRef.push(product)
  }
}
