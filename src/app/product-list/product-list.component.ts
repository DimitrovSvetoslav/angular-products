import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from '../models/product';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;

  address: string;

  constructor(private dataService: DataService, private dialog: MatDialog) { }
  
  ngOnInit() {
   this.products = this.dataService.getProducts().valueChanges();
   this.dataService.getProducts().valueChanges().subscribe(prod => this.products = prod);
  }
  openDialog(prodName): void {
    const dialogRef = this.dialog.open(DialogBox, {
      width: '250px',
      data: { prodName: prodName, address: this.address }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.address = result;
    });
  }
}

export interface DialogData {
  prodName: string;
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
