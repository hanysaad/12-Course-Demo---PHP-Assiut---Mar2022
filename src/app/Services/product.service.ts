import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private prdList: IProduct[];
  constructor() {
    this.prdList=[
      {id:1, name: 'Samsung S22 Plus', price: 21500, quantity:0, imgURL:'https://fakeimg.pl/200x100', catID:1},
      {id:5, name: 'Samsung S22 Ultra', price: 25250, quantity:1, imgURL:'https://fakeimg.pl/200x100', catID:1},
      {id:7, name: 'Samsung Tab 3', price: 1500, quantity:2, imgURL:'https://fakeimg.pl/200x100', catID:2},
      {id:9, name: 'Lenovo Tab', price: 1000, quantity:10, imgURL:'https://fakeimg.pl/200x100', catID:2},
      {id:10, name: 'Lenvo thinkpad X230', price: 13000, quantity:0, imgURL:'https://fakeimg.pl/200x100', catID:3},
      {id:15, name: 'Apple Macbook Pro', price: 36999, quantity:3, imgURL:'https://fakeimg.pl/200x100', catID:3}
    ]
   }

   getAllProducts(): IProduct[]
   {
    return this.prdList;
   }

   getProductsByCatID(catID:number): IProduct[]
   {
    if (catID==0)
        return this.getAllProducts();
    else
        return this.prdList.filter(prd=>prd.catID==catID);
   }

   getProductByID(prdID: number):IProduct|undefined
   {
     return this.prdList.find(prd=>prd.id==prdID);
   }

   searchProductByName(prdName: string): IProduct | undefined
   {
    return this.prdList.find(prd=>prd.name==prdName);
   }

   getPrdIDList(): number[]
   {
     return this.prdList.map(prd=> prd.id);
   }

   addProduct(prd:IProduct)
   {
     this.prdList.push(prd);
   }

   updateProduct(pridID: number, modPrd:IProduct)
   {

   }

   deleteProduct(prdID:number)
   {

   }
}
