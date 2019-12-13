import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { Product } from './models/product';
import { ProductComponent } from './product/product.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  prodName: string;
  address: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[];

  address: string;

  constructor(private dataService: DataService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.products = this.dataService.getProducts();
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
