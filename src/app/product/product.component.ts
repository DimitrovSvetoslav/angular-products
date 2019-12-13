import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isStock: boolean;
  @Input() product: Product;

  ngOnInit() {

  }

  buyProduct() {
    if (this.product.UnitsInStock <= 0) {
      confirm('We do not have that product in stock. Do you want to chose another one');
    } else {
      alert(`You just bought ${this.product.ProductName}!`)
      this.product.UnitsInStock--;
    }
  }
}