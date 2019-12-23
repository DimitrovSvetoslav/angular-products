import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../models/product'
import { DataService } from '../services/data.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-products-to-db',
  templateUrl: './add-products-to-db.component.html',
  styleUrls: ['./add-products-to-db.component.css']
})
export class AddProductsToDbComponent implements OnInit {

  product: Product;
  addForm;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
    this.product = this.dataService.getProducts();
    this.addForm = this.formBuilder.group({
      ProductID: '',
      ProductName: '',
      UnitPrice: '',
      UnitsInStock: '',
      DeliveryOn: '',
      URL: ''
    })
  }

  ngOnInit() {
  }

  onSubmit(customerData: Product) {
    this.dataService.saveProduct(customerData);
    this.router.navigate([''])
  }
}
