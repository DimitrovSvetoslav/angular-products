import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/product'
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products-to-db',
  templateUrl: './add-products-to-db.component.html',
  styleUrls: ['./add-products-to-db.component.css']
})
export class AddProductsToDbComponent implements OnInit {
  addForm;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) {
    this.addForm = this.formBuilder.group({
      ProductID: new FormControl('', Validators.min(1)),
      ProductName: new FormControl('', Validators.minLength(4)),
      UnitPrice: new FormControl('', Validators.min(0.01)),
      UnitsInStock: new FormControl('', Validators.min(0)),
      DeliveryOn: '',
      URL: ''
    })
  }

  ngOnInit() { }

  onSubmit(customerData: Product) {
    this.dataService.saveProduct(customerData);
    this.router.navigate([''])
  }
}
