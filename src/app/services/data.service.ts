import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private toParse = [
    {
        "ProductID": 1,
        "ProductName": "Burger",
        "UnitPrice": 12,
        "UnitsInStock": 39,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
        "ProductID": 2,
        "ProductName": "Healthy choices",
        "UnitPrice": 34,
        "UnitsInStock": 64,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://www.diabetes.org/sites/default/files/styles/crop_large/public/2019-06/Healthy%20Food%20Made%20Easy%20-min.jpg"
    },
    {
        "ProductID": 3,
        "ProductName": "Pancakes",
        "UnitPrice": 10,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://cdn.pixabay.com/photo/2017/08/02/10/15/restaurant-2570683_960_720.jpg"
    },
    {
        "ProductID": 4,
        "ProductName": "Pizza",
        "UnitPrice": 22,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://img.freepik.com/free-photo/tasty-pepperoni-pizza_79782-2100.jpg?size=626&ext=jpg"
    },
    {
        "ProductID": 5,
        "ProductName": "Pasta",
        "UnitPrice": 16.25,
        "UnitsInStock": 0,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://www.seriouseats.com/2019/08/20190809-burst-tomato-xo-pasta-vicky-wasik21--1500x1125.jpg"
    },
    {
        "ProductID": 6,
        "ProductName": "Pastry",
        "UnitPrice": 8.25,
        "UnitsInStock": 120,
        "DeliveryOn": new Date(2019, 12, 14),
        'URL': "https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2019/10/11/Food/Images/FD-BringIt_10_16_071.jpg"
    }
];
  private products;
  constructor() {
    this.products = _.values(this.toParse);
  }

  getProducts() {
    return this.products;
  }
}
