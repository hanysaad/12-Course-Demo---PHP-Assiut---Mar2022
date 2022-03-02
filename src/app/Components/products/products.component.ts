import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prdList: IProduct[];
  todayDate: Date = new Date();
  constructor() {
    this.prdList=[
      {id:1, name: 'Samsung S22 Plus', price: 21500, quantity:0, imgURL:'https://fakeimg.pl/250x100', catID:1},
      {id:5, name: 'Samsung S22 Ultra', price: 25250, quantity:1, imgURL:'https://fakeimg.pl/250x100', catID:1},
      {id:7, name: 'Samsung Tab 3', price: 1500, quantity:2, imgURL:'https://fakeimg.pl/250x100', catID:2},
      {id:9, name: 'Lenovo Tab', price: 1000, quantity:10, imgURL:'https://fakeimg.pl/250x100', catID:2},
      {id:10, name: 'Lenvo thinkpad X230', price: 13000, quantity:0, imgURL:'https://fakeimg.pl/250x100', catID:3},
      {id:15, name: 'Apple Macbook Pro', price: 36999, quantity:3, imgURL:'https://fakeimg.pl/250x100', catID:3}
    ]
   }

  ngOnInit(): void {
  }

  trackByProd(index: number, item: IProduct)
  {
    return item.id;
  }

}
