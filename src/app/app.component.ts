import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Product  } from './models/product';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.products = this.dataService.getProducts();
  }
}
