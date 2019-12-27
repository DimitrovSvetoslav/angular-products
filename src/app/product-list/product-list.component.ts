import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../models/product';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  address: string;

  constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getProductList().subscribe(prod => {
      this.products = prod;
    });
  }
  openDialog(product): void {
    const dialogRef = this.dialog.open(DialogBox, {
      width: '250px',
      data: { product: product, address: this.address }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.address = result.address;
      this.dataService.updateProductQuantity(result.product.key, --result.product.UnitsInStock);
      console.log(result);
    });
  }
}

export interface DialogData {
  product: Product;
  address: string;
}

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class DialogBox {

  constructor(
    public dialogRef: MatDialogRef<DialogBox>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
