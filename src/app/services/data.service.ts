import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  productsRef;

  constructor(private http: HttpClient, db: AngularFireDatabase) {
    this.productsRef = db.list('products');
  }

  getProducts() {
    return this.productsRef;
  }
}
